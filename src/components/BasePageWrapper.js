export default function BasePageWrapper({ children }) {
    return (
        <div style={{
            flex: 1,
            maxWidth: 720,
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '100%',
        }}>
            {children}
        </div>
    );
}
