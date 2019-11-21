import React from "react";
import logo from "./logo.svg";
import FadeIn from "react-fade-in";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import MaterialTable, { MTableToolbar } from "material-table";

var columns = [
  { title: "ID", field: "ID" },
  { title: "Category", field: "Category" },
  { title: "Views", field: "Views" },
  { title: "Claps", field: "Claps" }
];

var data = [
  {
    ID: "1",
    Category: "Technology",
    Views: "200",
    Claps: "5"
  },
  {
    ID: "2",
    Category: "Technology",
    Views: "300",
    Claps: "20"
  },
  {
    ID: "3",
    Category: "Music",
    Views: "100",
    Claps: "30"
  },
  {
    ID: "4",
    Category: "Music",
    Views: "50",
    Claps: "2"
  },
  {
    ID: "5",
    Category: "Art",
    Views: "500",
    Claps: "100"
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <FadeIn>
            <h1 style={{ color: "black", marginBottom: "90px" }}>
              React App
              <img
                style={{ width: "100px" }}
                src={logo}
                className="App-logo"
                alt="logo"
              />
            </h1>
          </FadeIn>
          <div
            class="d-flex justify-content-around align-items-center"
            style={{ width: "100vw", color: "black" }}
          >
            <div>
              <FadeIn>
                <table class="tab">
                  <tr>
                    <th>ID</th>
                    <th>Category</th>
                    <th>Views</th>
                    <th>Claps</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td class="cat">Technology</td>
                    <td>200</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td class="cat">Technology</td>
                    <td>300</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td class="cat">Music</td>
                    <td>100</td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td class="cat">Music</td>
                    <td>50</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td class="cat">Art</td>
                    <td>500</td>
                    <td>100</td>
                  </tr>
                </table>
                <h1 class="mt-5">HTML Table</h1>
              </FadeIn>
            </div>
            <div>
              <FadeIn>
                <MaterialTable
                  title={"Material Table"}
                  options={{
                    grouping: true,
                    dense: true,
                    //filtering: true,
                    exportButton: true
                  }}
                  components={{
                    Toolbar: props => <MTableToolbar {...props} />
                  }}
                  columns={columns}
                  data={data}
                />
                <h1 class="mt-5">Material Table</h1>
              </FadeIn>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
