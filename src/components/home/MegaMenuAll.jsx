import React, { Component } from "react";
import AppURL from "../../api/AppURL";
import axios from "axios";
import { Link } from "react-router-dom";
class MegaMenuAll extends Component {
  constructor() {
    super();
    this.state = {
      MenuData: [],
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.AllCategoryDetails)
      .then((response) => {
        this.setState({ MenuData: response.data });
      })
      .catch((error) => {});
  }

  // ///handle click function

  MenuItemClick = (event) => {
    event.target.classList.toggle("active");
    var panel = event.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };
  // handleAccordionClick = (index) => {
  //   this.setState((prevState) => ({
  //     activeIndex: prevState.activeIndex === index ? null : index,
  //   }));
  // };

  render() {
    const CatList = this.state.MenuData;

    const MyView = CatList.map((CatList, i) => {
      return (
        <div key={i.toString()}>
          <button onClick={this.MenuItemClick} className="accordionAll">
            <img
              alt=""
              className="accordionMenuIconAll"
              src={CatList.category_image}
            />
            &nbsp; {CatList.category_name}
          </button>
          <div className="panelAll">
            <ul>
              {CatList.subcategory_name.map((SubList, i) => {
                return (
                  <li key={i}>
                    <Link
                      to={
                        "productsubcategory/" +
                        CatList.category_name +
                        "/" +
                        SubList.subcategory_name
                      }
                      className="accordionItem"
                    >
                      {SubList.subcategory_name}{" "}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      );
    });

    return (
      <div className="accordionMenuDivAll">
        <div className="accordionMenuDivInsideAll">{MyView}</div>
      </div>
    );

    // return (
    //   <div className="accordionMenuDivAll">
    //     <div className="accordionMenuDivInsideAll">
    //       {Array.from({ length: 10 }, (_, index) => (
    //         <React.Fragment key={index}>
    //           <button
    //             className={`accordionAll ${
    //               this.state.activeIndex === index ? "active" : ""
    //             }`}
    //             onClick={() => this.handleAccordionClick(index)}
    //           >
    //             <img
    //               className="accordionMenuIconAll"
    //               src="https://image.flaticon.com/icons/png/128/739/739249.png"
    //               alt={`Icon ${index}`}
    //             />
    //             &nbsp; Men's Clothing
    //           </button>
    //           <div
    //             className="panelAll"
    //             style={{
    //               maxHeight: this.state.activeIndex === index ? "500px" : "0",
    //             }}
    //           >
    //             <ul>
    //               <li>
    //                 <a href="#" className="accordionItemAll">
    //                   {" "}
    //                   Mans Tshirt 1
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#" className="accordionItemAll">
    //                   {" "}
    //                   Mans Tshirt 2
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>
    //         </React.Fragment>
    //       ))}
    //     </div>
    //   </div>
    // );
  }
}

export default MegaMenuAll;
