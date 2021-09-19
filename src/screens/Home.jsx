import "./Home.css"

import React, { useEffect, useState } from 'react'
import { searchUser, updateReducer } from "../redux/actions/searchAction";
import { useDispatch, useSelector } from "react-redux";

import Card from '../components/Card';
import Pagination from '../components/Pagination';
import SearchBar from './SearchBar';
import mockData from '../mock/MockData';

export default function Home() {
  const [dataToDisplay,setDataToDisplay]=useState([])
  const [textToDisplay, setTextToDisplay] = useState("start by searching user");
  const [searchInformation, setSearchInformation] = useState("");
  const [currentPage, setCurrentPage] = useState(1)
  const [pageLimit, setPageLimit] = useState(10)
  const {resultSearch} = useSelector(state => state)
  const dispatch = useDispatch();

  /**
   * LIve cycle used to catch all event about search reducer
   */
  useEffect(() => {
  if(resultSearch && resultSearch.length>0){
    getAdataToDisplay(currentPage,pageLimit)  
  }else if(resultSearch && resultSearch.length===0 ){
    setTextToDisplay("No result")
  }
  }, [resultSearch])

  /**
   * lice cyle used to send request to server when user stop to write during 300 ms
   */
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if(searchInformation.trim()===""){
        setTextToDisplay("start by searching user")
        setDataToDisplay([])
      }else{
   // Send request here
   dispatch(searchUser(searchInformation))
      }
   
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchInformation]);

  /**
   * Function used to proccess information comming from reducer 
   * depending to current user pagination and limit 
   * @param {String} currentPage 
   * @param {String} pageLimit 
   */
  const getAdataToDisplay=(currentPage, pageLimit)=>{
    
    const offset = (currentPage - 1) * pageLimit;
    const newDataToDisplay = resultSearch.slice(offset, offset + pageLimit);
    setDataToDisplay(newDataToDisplay)
  }

  /**
   * Function used to open git profil 
   * @param {string} url 
   * @returns 
   */
  const moreInformation = (url) => {
    if (!url) {
      return null;
    }
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  /**
   * Function used to proccess information comming from reducer
   *  depending to the  pagination and limit  comming from gagination component
   * @param {Object} data 
   */
 const onPageChanged = data => {
    const { currentPage, totalPages, pageLimit } = data;
    setCurrentPage(currentPage)
    getAdataToDisplay(currentPage,pageLimit)
  };
  return (
    <div className="row d-flex flex-row container ">
      <h1>Search bar</h1>
      <div className="d-flex flex-row py-4 align-items-center containerPagination">
      <Pagination totalRecords={mockData.length||0} pageLimit={pageLimit} pageNeighbours={1} onPageChanged={(data)=> onPageChanged(data)}/>
      </div>

      <SearchBar handleChange={(data)=>setSearchInformation(data)} />
      <div className="row d-flex flex-row containerResult ">
      {dataToDisplay && dataToDisplay.length>0? dataToDisplay.map((user) => {
        return (
          <Card
          key={user.id}
            imageProfile={user.avatar_url}
            name={user.login}
            gitProfil={user.html_url}
            handlePressMoreInfiamtion={(data) => moreInformation(data)}
          />
        );
      }):(
        <p>{textToDisplay}</p>
      )}
      </div>
      
    </div>
  );
}
