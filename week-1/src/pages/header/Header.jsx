import "./Header.style.scss";
export const Header = () => {
  return (
    <div className="header-content">
      <div className="header-title header-content-item">
        <span>Indie Space</span>
      </div>
      <div className="header-menu header-content-item">
        <span>News</span>
        <span>Opinion</span>
        <span>Technology</span>
        <span>Our Planet</span>
        <span>Health and Science</span>
      </div>
      <div className="header-sign-up header-content-item">
        <span>Sign up for our newsletter</span>
      </div>
    </div>
  );
};
