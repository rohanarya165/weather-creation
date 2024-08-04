import React, { useState } from "react";
import DonutChart from "../componants/DonutChart";
import { Layout, Menu } from "antd";
import StatusBar from "./StatusBar";
import Logo from "../assets/Screenshot 2024-08-03 at 10.21.35 PM.png";
import SideColumn from "./SideColumn";
import ImageOne from "../assets/imageOne.png";
import ImageTwo from "../assets/imageTwo.png";
import ImageThree from "../assets/imageThree.png";
import ImageFour from "../assets/imageFour.png";
import ImageFive from "../assets/imageFive.png";
import TableWeather from "../componants/TableWeather";
import ChartWeather from "../componants/ChartWeather";

const { Header, Sider, Content } = Layout;

const AppLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsed={true}
        style={{ background: "#DFF0FF", padding: "15px" }}
      >
        <img src={Logo} className="w-[47px] h-[47px] my-4" />
        <div className="flex flex-col justify-center gap-20 mt-20">
          <img src={ImageOne} alt="" className="h-[40px] w-[40px]" />
          <img src={ImageTwo} alt="" className="h-[40px] w-[40px]" />
          <img src={ImageThree} alt="" className="h-[40px] w-[40px]" />
          <img src={ImageFour} alt="" className="min-h-[40px] w-[50px]" />
          <img src={ImageFive} alt="" className="h-[40px] w-[40px]" />
        </div>
      </Sider>
      <Layout>
        <Header
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,1) 28%, rgba(185,181,250,1) 48%, rgba(255,255,255,1) 71%)",
            height: "90px",
            padding: "20px",
          }}
        >
          <div className="flex justify-between">
            <div className="text-[30px] mt-4 font-[700]">Overview</div>
            <div className="flex gap-4">
              <div className="border rounded-full w-[50px] h-[50px] bg-slate-400"></div>
              <div className="border rounded-full w-[50px] h-[50px] bg-slate-400"></div>
              <div className="flex flex-col gap-2">
                <div className="text-[20px] font-[700]">Welcome back, John</div>
                <div className="text-[12px] font-[400]">
                  myemailaddress@example.com
                </div>
              </div>
            </div>
          </div>
        </Header>
        <StatusBar />
        <Content
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,1) 28%, rgba(185,181,250,1) 48%, rgba(255,255,255,1) 71%)",
          }}
        >
          <div class="flex flex-wrap gap-4 pr-4">
            <div class="grow mt-4 ml-4">
              <div className="flex flex-wrap gap-4">
                <div className="grow">
                  <ChartWeather />
                </div>
                <div>
                  <DonutChart />
                </div>
              </div>
              <div>
                <TableWeather />
              </div>
            </div>
            <div class="grow-0 ">
              <SideColumn />
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
