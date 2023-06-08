package com.hamitmizrak.business.service;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface IProfileApp {

    // Bütün veri eklesin
    public String speedDataService();

    // Bütün veriyi silsin
    public String allDeleteService();

    // App Information
    public String appInformationService(HttpServletRequest request, HttpServletResponse response);
}
