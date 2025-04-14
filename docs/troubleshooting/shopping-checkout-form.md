# 장바구니 결제 폼 트러블슈팅

## 문제 상황

- 결제 폼 유효성 검사 실패 시 에러 메시지 표시 문제
- 폼 데이터 상태 관리 및 초기화 문제
- 다중 필드 유효성 검사 로직 복잡성
- 폼 제출 시 데이터 검증 누락

## 원인 분석

1. **폼 상태 관리 구조**

```typescript
// ShoppingCheckOut.tsx
const methods = useForm<ShippingFormData>({
  resolver: yupResolver(shippingSchema) as Resolver<ShippingFormData>,
  mode: 'onChange',
});

const {
  formState: { errors },
  watch,
} = methods;

const [isFormError, setIsFormError] = useState(false);

const name = watch('name');
const phone = watch('phone');
const address = watch('address');
const city = watch('city');
const zipCode = watch('zipcode');

const hasEmptyFields = !name || !phone || !address || !city || !zipCode;
const hasFormErrors = !!(
  errors.name ||
  errors.phone ||
  errors.address ||
  errors.city ||
  errors.zipcode
);
```

- `FormProvider`를 사용하여 폼 상태 공유
- `useForm` 훅을 사용하여 폼 상태 관리
- `watch`를 통한 실시간 필드 값 모니터링
- 빈 필드 및 에러 상태 관리

2. **유효성 검사 스키마**

```typescript
// shared/config/validationSchema.ts
import * as yup from 'yup';
import { ShippingFormData } from '@/features/cart/cartProcess/shoppingCheckOut/ShoppingCheckOut';

const phoneRegex = /^[0-9]{10,11}$/;
const zipcodeRegex = /^[0-9]{5}$/;

export const shippingSchema = yup.object().shape({
  name: yup
    .string()
    .required('이름을 입력해주세요')
    .min(2, '2자 이상 입력해주세요'),
  phone: yup
    .string()
    .required('전화번호를 입력해주세요')
    .matches(phoneRegex, '올바른 전화번호를 입력해주세요'),
  address: yup.string().required('주소를 입력해주세요'),
  city: yup.string().required('도/시를 입력해주세요'),
  zipcode: yup
    .string()
    .required('우편번호를 입력해주세요')
    .matches(zipcodeRegex, '올바른 우편번호를 입력해주세요'),
  memo: yup.string(),
}) as yup.ObjectSchema<ShippingFormData>;
```

- 정규식 패턴을 상수로 분리하여 재사용성 향상
- 타입 안정성을 위한 `yup.ObjectSchema` 타입 캐스팅
- 필수 필드 및 형식 검증
- 커스텀 에러 메시지 설정

3. **폼 제출 처리**

```typescript
// ShoppingCheckOut.tsx
const onSubmit = async (data: ShippingFormData) => {
  try {
    await postRequest({
      url: API_ENDPOINTS.SHIPPING_ADDRESS,
      data,
    });
    toast.success('배송 정보 저장 성공');
    setIsFormError(false);
  } catch (error) {
    console.error(error);
    setIsFormError(true);
  }
};
```

- 배송 정보 저장 API 호출
- 성공 시 토스트 메시지 표시
- 에러 발생 시 상태 업데이트

## 해결 방법

1. **폼 상태 최적화**

```typescript
// ShoppingCheckOut.tsx
const methods = useForm<ShippingFormData>({
  resolver: yupResolver(shippingSchema) as Resolver<ShippingFormData>,
  mode: 'onChange',
});
```

- `mode: 'onChange'`로 실시간 유효성 검사
- 타입 안정성을 위한 `Resolver` 타입 캐스팅
- `FormProvider`를 통한 폼 상태 공유

2. **컨트롤러 기반 폼 필드 관리**

```typescript
// ShoppingCheckOutInfo.tsx
const {
  control,
  handleSubmit,
  formState: { errors },
  reset,
} = useFormContext<ShippingFormData>();

const { field: nameField } = useController({
  name: 'name',
  control,
});

const { field: phoneField } = useController({
  name: 'phone',
  control,
});

// ... 다른 필드들
```

- `useFormContext`로 부모 폼 컨텍스트 접근
- `useController`로 개별 필드 컨트롤
- 필드별 에러 상태 관리
- 초기값 설정 및 리셋 기능

3. **폼 필드 렌더링**

```typescript
// ShoppingCheckOutInfo.tsx
<InputBox
  hasError={!!errors.name}
  {...nameField}
  placeholder="이름"
  defaultValue={shipInfo?.name}
/>
{errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
```

- 스타일드 컴포넌트와 통합
- 에러 상태에 따른 스타일링
- 에러 메시지 표시
- 기본값 설정

4. **에러 상태 관리**

```typescript
// ShoppingCheckOut.tsx
const [isFormError, setIsFormError] = useState(false);

const hasEmptyFields = !name || !phone || !address || !city || !zipCode;
const hasFormErrors = !!(
  errors.name ||
  errors.phone ||
  errors.address ||
  errors.city ||
  errors.zipcode
);
```

- 폼 에러 상태 관리
- 빈 필드 체크
- 유효성 검사 에러 체크

5. **폼 제출 최적화**

```typescript
// ShoppingCheckOut.tsx
const onSubmit = async (data: ShippingFormData) => {
  try {
    await postRequest({
      url: API_ENDPOINTS.SHIPPING_ADDRESS,
      data,
    });
    toast.success('배송 정보 저장 성공');
    setIsFormError(false);
  } catch (error) {
    console.error(error);
    setIsFormError(true);
  }
};
```

- API 요청 처리
- 성공/실패 상태 관리
- 사용자 피드백 제공

## 개선 효과

1. **사용자 경험**

   - 실시간 유효성 검사로 즉각적인 피드백
   - 성공/실패 시 토스트 메시지 표시
   - 폼 상태에 따른 UI 업데이트

2. **코드 품질**

   - 타입 안정성 향상
   - 모듈화된 유효성 검사 로직
   - 재사용 가능한 컴포넌트

3. **유지보수성**
   - 명확한 폼 구조
   - 분리된 유효성 검사 스키마
   - 일관된 에러 처리
