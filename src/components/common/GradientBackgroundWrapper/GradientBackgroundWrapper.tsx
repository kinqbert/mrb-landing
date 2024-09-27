import styles from "./GradientBackgroundWrappe.module.scss";

interface Props {
  variant?: "top" | "bottom";
  children?: React.ReactNode;
}

export const GradientBackgroundWrapper = ({
  variant = "top",
  children,
}: Props) => {
  const getStyles = () => {
    if (variant === "top") {
      return [styles.backgroundWrapper, styles.backgroundWrapperTop].join(" ");
    }

    return [styles.backgroundWrapper, styles.backgroundWrapperBottom].join(" ");
  };

  return <div className={getStyles()}>{children}</div>;
};
