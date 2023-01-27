import React, { ReactNode } from "react";
import styles from "./Layout.module.css";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props): ReactNode => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
