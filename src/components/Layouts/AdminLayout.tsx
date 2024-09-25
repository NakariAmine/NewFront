"use client";
import React, { useState, ReactNode } from "react";
import Sidebar from "@/components/SidebarAdmin";
import Header from "@/components/Header";

interface DefaultLayoutProps {
  children: React.ReactNode;
  hideNavAndSidebar?: boolean;
}

export default function DefaultLayout({
  children,
  hideNavAndSidebar = false,
}: DefaultLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex">
        {/* <!-- ===== Sidebar Start ===== --> */}
        {!hideNavAndSidebar && (
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        )}
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className={`relative flex flex-1 flex-col ${!hideNavAndSidebar ? 'lg:ml-72.5' : ''}`}>
          {/* <!-- ===== Header Start ===== --> */}
          {!hideNavAndSidebar && (
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          )}
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </>
  );
}