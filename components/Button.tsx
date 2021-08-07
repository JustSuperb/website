import { FC } from 'react';
import clsx from 'clsx';

type Props = {
  href: string;
  type?: "filled" | "text";
  size?: "large";
}

const Button: FC<Props> = ({ children, type: originType, size, ...restProps }) => {
  const type = originType || "filled";
  return (
    <a className={clsx({
      text: type === "text",
      filled: type === "filled",
      large: size === "large"
    })} {...restProps}>
      {children}
      <style jsx>{`
      a {
        display: block;
        padding: 12px 16px;
        border-radius: 4px;
        cursor: pointer;
        transition: 0.2s;
      }
      a:hover {
        box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;
      }
      .filled {
        background: var(--primary-color);
        color: #fff;
      }
      .text {
        color: inherit;
      }
      .large {
        font-size: 24px;
        padding: 12px 20px;
      }
      @media(max-width: 375px) {
        a {
          font-size: 14px;
          padding: 8px 12px;
        }
        .large {
          font-size: 18px;
          padding: 12px 16px;
        }
      }
 
    `}</style>
    </a>
  );
}
export default Button;
