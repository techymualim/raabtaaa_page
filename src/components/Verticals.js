import "../styles.css";
import logistics_img from '../logistics_icn.svg';
import warehouse_img from '../warehouse_icn.svg';

export default function Verticals({text}){
    return(
        <div className="box_one3">
      <div className="heading">
        {text}
      </div>
      <div className="vert_boxes">
       
      <div className="vert_box">
        <div className="icon_bx">
        <img src={warehouse_img} alt="logistics_icon"/>
        </div>
        <p>Warehouse</p>
        <ul>
        <li>Picker</li>
        <li>Packer</li>
        <li>Loader</li>
        <li>Sales Agent</li>
        <li>Quality Control</li>
        <li>Sorter</li>
        </ul>
        </div>
        <div className="vert_box">
        <div className="icon_bx">
          <img src={logistics_img} alt="logistics_icon"/>
        </div>
        <p>Logistics</p>
        <ul>
        <li>Rider</li>
        <li>Driver</li>
        <li>Delivery Boy</li>
        <li>Food Delivery Biker</li>
        
        </ul>
        </div>
      </div>
      
    </div>
    );
}