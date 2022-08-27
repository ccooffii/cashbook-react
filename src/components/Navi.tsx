import Icon from "./Icon";
import {NavLink} from "react-router-dom";
import React from "react";
import styled from "styled-components";
const NaviWrapper = styled.div`
  width: 100%;
  height: 50px;
  overflow-y: hidden;
  overflow-x: hidden;
  .highLight{
    background-color: rgb(246,209,180);
  }
  >ul 
  {
    display: flex;
    flex-direction: row;
    > a {
      width: 50%;
      > li {
        border-radius: 8px;
        margin-left: 2px;
        margin-right: 2px;
        margin-top: 2px;
        height: 50px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight: bolder;
        .icon {
          width: 25px;
          height: 25px;
          display: inline-block;
        }
      }
    }
  }
`
const Navi = () =>{
    let activeClassName = "highLight";
    return(
        <NaviWrapper>
            <ul>
                {/*<NavLink to="/home"*/}
                {/*         className = {({ isActive }) =>*/}
                {/*             isActive ? activeClassName : undefined }>*/}
                {/*        <li><Icon name="home"></Icon>主页</li>*/}
                {/*</NavLink>*/}
                <NavLink to="/count"
                         className = {({ isActive }) =>
                             isActive ? activeClassName : undefined }>
                    <li><Icon name="count"></Icon>记一笔</li>
                </NavLink>
                <NavLink to="/statistics"
                         className = {({ isActive }) =>
                             isActive ? activeClassName : undefined }>
                    <li><Icon name="analysis"></Icon>明细</li>
                </NavLink>
            </ul>
        </NaviWrapper>
    );
}

export  default  Navi;