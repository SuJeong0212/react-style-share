import * as Rec from './RecommendProduct.styled';

export default function RecommendProduct() {
  return (
    <div>
      <h3>후기가 많은 상품</h3>
      <Rec.RecItem>
        <Rec.RecTitle>
          <img src="http://via.placeholder.com/50x50" alt="" />
          <div>
            <p>
              <span>Brand</span>
              Text
            </p>
          </div>
          <div>
            <p>
              <span style={{ color: 'red', fontWeight: 'bold' }}>38%</span>
              19,900원
            </p>
          </div>
        </Rec.RecTitle>
        <Rec.RecImg>
          <img src="http://via.placeholder.com/50x50" alt="" />
          <img src="http://via.placeholder.com/50x50" alt="" />
          <img src="http://via.placeholder.com/50x50" alt="" />
        </Rec.RecImg>
      </Rec.RecItem>
    </div>
  );
}
