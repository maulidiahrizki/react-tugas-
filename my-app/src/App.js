import logo from './logo.svg';
import './App.css';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"></link>
function App() {

  return (
    
    <div className="Parentbox">
    <div className="Foto">
      <img src="maron ads03.jpg"/>
    </div>
    <div className="Deskripsi">
      <p className="Cate">THE BEST SNEAKERS IN THIS YEAR</p>
      <h2 className="Title">FOLLOW OFFICIAL SHOP</h2>
      <p className="Price">IDR 78.000</p>
      <p className="Info">
      Dengan desain yang menarik, dan elegan membuat penampilan si pemakai akan terasa lebih percaya diri. dan dengan bahan produk ringan dan tentunya juga membuat nyaman.
      </p>
      <h4 className="Title">SIZE</h4>
    
      <button type="button" class="btn btn-light">36 cm</button>
      <button type="button" class="btn btn-light">37 cm</button>
      <button type="button" class="btn btn-light">38 cm</button>
      <button type="button" class="btn btn-light">39 cm</button>
      <button type="button" class="btn btn-light">40 cm</button>
      <br>
      </br>
      <br>
      </br>
      <button id="A" type="button" class="btn btn-primary btn-lg">beli sekarang</button>
      <button id="B"type="button" class="btn btn-primary btn-lg">masukan keranjang</button>
      <div
      className="Deskripsibawah">
      <p className="bawah">THE BEST SNEAKERS IN THIS YEAR</p>
    </div>
    </div>

    
   </div>

  );
}

export default App;