import * as Rec from './RecommendProduct.styled';

export default function RecommendProduct() {
  return (
    <div
      style={{
        margin: '30px 0 20px 0',
        borderTop: '1px solid #eee',
        borderBottom: '1px solid #eee',
        padding: '20px 0',
      }}
    >
      <h3>후기가 많은 상품</h3>
      <Rec.RecItem>
        <Rec.RecTitle>
          <img src="http://via.placeholder.com/60x60" alt="" />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Rec.RecText>
              <p>
                <span>Brand</span>
                Textfffffffffffffffdfdsfsdgsdgsdgfdsgffff
              </p>
            </Rec.RecText>
            <div>
              <p>
                <span style={{ color: 'red', fontWeight: 'bold' }}>38%</span>
                19,900원
              </p>
            </div>
          </div>
        </Rec.RecTitle>
        <Rec.RecImg>
          <img src="http://via.placeholder.com/75x75" alt="" />
          <img src="http://via.placeholder.com/75x75" alt="" />
          <img src="http://via.placeholder.com/75x75" alt="" />
        </Rec.RecImg>
      </Rec.RecItem>
    </div>
  );
}
