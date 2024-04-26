import { Spin } from "antd"
import { Suspense } from "react"

export const PageLoadingWrapper = ({ children }) => {
    return (
        <Suspense fallback={
            <div style={styles.loadingContainer}>
                <Spin size="large" />
                <b>Loading ...</b>
            </div>
        }>
            {children}
        </Suspense>
    );
}

const styles = {
    loadingContainer: {
        display: "flex",
        justifyContent: "center",
        height: "300px",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px"
    }
}