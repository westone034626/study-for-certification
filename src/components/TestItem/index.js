function TestItem({ test }) {
    const styles = {
        container: {
            backgroundColor: 'rgba(0,0,0,0.1)',
            padding: 16,
            borderRadius: 8,
        },
        infoContainer: {
            flexDirection: 'row',
        },
        infoDivider: {
            margin: '16px',
            width: 2,
            backgroundColor: '#FFFFFF',
        },
        infoTitleContainer: {
            flexShrink: 0,
            padding: '16px 0px',
        },
        infoTitleFont: {},
        infoContentContainer: {
            flex: 1,
            width: 0,
            padding: '16px 0px',
        },
        infoContentFont: {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        },
        controllerContainer: {
            flexDirection: 'row',
            backgroundColor: '#FFFFFF',
            borderRadius: 8,
        },
        controllerButton: {
            flex: 1,
            alignItems: 'center',
            padding: '16px 0px',
            borderRadius: 8,
        },
        controllerFont: {},
    };

    return (
        <div style={styles.container}>
            <div style={styles.infoContainer}>
                <div style={styles.infoTitleContainer}>
                    <p style={styles.infoTitleFont}>회차정보</p>
                    <div style={{ paddingTop: 4, paddingBottom: 4 }}></div>
                    <p style={styles.infoTitleFont}>최근 응시 결과</p>
                </div>
                <div style={styles.infoDivider}></div>
                <div style={styles.infoContentContainer}>
                    <p style={styles.infoContentFont}>{`${test.title} ${test.title}`}</p>
                    <div style={{ paddingTop: 4, paddingBottom: 4 }}></div>
                    <p style={styles.infoContentFont}>60점</p>
                </div>
            </div>
            <div style={{ paddingTop: 8, paddingBottom: 8 }}></div>
            <div style={styles.controllerContainer}>
                <button style={styles.controllerButton}>
                    <p style={styles.controllerFont}>결과확인</p>
                </button>
                <button style={styles.controllerButton}>
                    <p style={styles.controllerFont}>응시하기</p>
                </button>
            </div>
        </div>
    );
}

export default TestItem;
