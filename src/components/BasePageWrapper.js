export default function BasePageWrapper({ children }) {
    return (
        <div style={{ flex: 1 }}>
            {children}
        </div>
    );
}
