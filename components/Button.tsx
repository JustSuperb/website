const Button = ({ children, ...restProps }) => (
  <a {...restProps}>
    {children}
    <style jsx>{`
      a {
        display: block;
        background: var(--primary-color);
        padding: 12px 16px;
        color: #fff;
        border-radius: 4px;
        cursor: pointer;
        transition: 0.2s;
      }
      a:hover {
        box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;
      }
    `}</style>
  </a>
);

export default Button;
