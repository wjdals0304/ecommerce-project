import rightIcon from 'public/images/home/rightIcon.svg';
import Image from 'next/image';
function HomeBlog() {
  return (
    <div className="home-blog-container">
      <div className="home-blog-title">
        <span className="home-blog-title-text">
          News Blog About Electronics
        </span>
        <a href="#" className="view-all">
          View All{' '}
          <Image src={rightIcon} alt="rightIcon" width={24} height={24} />
        </a>
      </div>
      <div className="home-blog-contents">
        <div className="home-blog-content">
          <div className="home-blog-item">
            <img
              className="home-blog-item-image"
              src=""
              alt=""
              width="396px"
              height="229px"
            />
            <div className="home-blog-item-content">
              <span className="home-blog-item-date">08 June 2024</span>
              <span className="home-blog-item-title">
                The Best Laptop For Your Work
              </span>
              <button className="home-blog-item-btn">Read More</button>
            </div>
          </div>
        </div>
        <div className="home-blog-content">
          <div className="home-blog-item">
            <Image
              className="home-blog-item-image"
              src=""
              alt=""
              width="396px"
              height="229px"
            />
            <div className="home-blog-item-content">
              <span className="home-blog-item-date">08 June 2024</span>
              <span className="home-blog-item-title">
                The Best Laptop For Your Work
              </span>
              <button className="home-blog-item-btn">Read More</button>
            </div>
          </div>
        </div>
        <div className="home-blog-content">
          <div className="home-blog-item">
            <Image
              className="home-blog-item-image"
              src=""
              alt=""
              width="396px"
              height="229px"
            />
            <div className="home-blog-item-content">
              <span className="home-blog-item-date">08 June 2024</span>
              <span className="home-blog-item-title">
                The Best Laptop For Your Work
              </span>
              <button className="home-blog-item-btn">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBlog;
