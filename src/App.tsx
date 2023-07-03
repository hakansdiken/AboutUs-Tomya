import React from "react";
import { Grid, Typography, Card, CardContent } from "@mui/material";
import "./App.css";

import aboutUsBanner from "./assets/aboutus-banner.png";
import aboutUsCoins from "./assets/aboutus-coins.png";
import bctr from "./assets/BCTR-logo.png";

import selfie from "./assets/ic-selfie.svg";
import privacy from "./assets/ic-privacy.svg";
import sellbuy from "./assets/ic-sellbuy.svg";
import support from "./assets/ic-support.svg";
import { MyNavbar } from "./components/MyNavbar";
import { MyCard } from "./components/MyCard";

const App = () => {
  return (
    <Grid container spacing={20}>
      <MyNavbar />
      <Grid
        item
        container
        spacing={10}
        bgcolor={"#5952e4"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={9} sm={6} md={6} lg={5}>
          <img src={aboutUsBanner} alt="" className="aboutUsBanner" />
        </Grid>
        <Grid item sm={12} md={6} lg={5} className="bannerText">
          <Typography variant="h3" className="heading" color={"white"}>
            TOMYA; kripto para almanın hızlı ve kolay yoludur.
          </Typography>
          <Typography variant="h6" className="subHeading" color={"white"}>
            Yenilikçi, dürüst ve profesyonel bakış açısı ile hareket eden TOMYA,
            kullanıcılara dijital para borsalarında güvenli ve şeffaf şekilde
            hizmet etmeyi vizyon edinmiştir.
          </Typography>
        </Grid>
      </Grid>
      <Grid item container spacing={20}>
        <Grid marginX={15} item textAlign={"center"}>
          <Typography variant="h3" fontWeight={"bold"}>
            Neden Tomya?
          </Typography>
          <Typography variant="h6">
            Temelleri 2019 yılında atılan TOMYA, Türkiye'nin kapsamlı, güvenilir
            ve hızlı kripto para borsası olma hedefiyle kuruldu. Mayıs 2020'de
            üye alımına başlayan TOMYA, Türkiye’nin en yüksek hacimli dijital
            varlık işlem platformu olmak için yola çıkmıştır.
          </Typography>
        </Grid>
        <Grid item container justifyContent={"center"}>
          <MyCard
            icon={<img src={selfie} alt="Selfie Icon" />}
            cardText="Kullanıcı dostu platformumuz ve arayüzlerimiz, her seviyedeki üyemizin tüm işlemlerini en kolay ve en hızlı şekilde yapabilmesi için tasarlandı."
            cardHeading="Multi Platform ve Akıllı Arayüz"
          />
          <MyCard
            icon={<img src={privacy} alt="Privacy Icon" />}
            cardText="TOMYA'da iki faktörlü güvenlik doğrulama sistemi uygulanır; kişisel bilgilerinizin ve yatırımlarınızın güvenliği en üst seviyede tutulur."
            cardHeading="Multi Platform ve Akıllı Arayüz"
          />
          <MyCard
            icon={<img src={sellbuy} alt="Sellbuy Icon" />}
            cardText="Tomya’nin pratik arayüzü ve gelişmiş mobil özellikleriyle işlemlerinizi dilediğiniz yerden takip etmek çok kolay!"
            cardHeading="Hızlı Alım-Satım"
          />
          <MyCard
            icon={<img src={support} alt="Support Icon" />}
            cardText="Anlaşmalı olduğumuz bankalar üzerinden para gönderme işlemlerinizi 7/24 gerçekleştirebilirsiniz."
            cardHeading="7/24 Yatırım İşlemleri"
          />
        </Grid>
        <Grid
          item
          container
          justifyContent={"center"}
          bgcolor={"#eeeff6"}
          alignItems={"center"}
        >
          <Grid item sm={12} md={6} lg={4}>
            <img src={aboutUsCoins} alt="" className="aboutUsBanner" />
          </Grid>
          <Grid item sm={12} md={6} lg={6}>
            <Typography variant="h3" className="heading" fontWeight={"bold"}>
              Hizmet Misyonumuz
            </Typography>
            <ul>
              <li>
                <Typography variant="h5">
                  Güçlü takım ve işbirliği ile tam hizmet
                </Typography>
              </li>
              <li>
                <Typography variant="h5">
                  Üstün teknoloji ürünleri ile 7/24 destek
                </Typography>
              </li>
              <li>
                <Typography variant="h5">
                  Güvenilir kaynaklardan en son piyasa bilgileri
                </Typography>
              </li>
              <li>
                <Typography variant="h5">
                  Sonuç odaklı araştırma ve strateji planlaması
                </Typography>
              </li>
              <li>
                <Typography variant="h5">
                  Yüksek güvenlik ve kişisel verilerin korunması
                </Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Grid item container justifyContent={"center"} margin={20}>
          <Typography
            variant="h3"
            className="heading"
            fontWeight={"bold"}
            marginBottom={20}
          >
            İş Birliklerimiz
          </Typography>
          <Card sx={{ borderRadius: "12px" }} elevation={10}>
            <CardContent>
              <Grid
                container
                alignItems={"center"}
                justifyContent={"center"}
                spacing={10}
                direction={"row"}
              >
                <Grid
                  item
                  md={9}
                  lg={4}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <img src={bctr} alt="bctr" className="aboutUsBanner" />
                </Grid>
                <Grid item md={12} lg={6}>
                  <Typography variant="h5">
                    Tomya Teknoloji A.Ş. olarak kripto ekosisteminde
                    faaliyetlerimize hız kesmeden devam ediyoruz. Türkiye’de
                    sürdürülebilir blockchain ekosistemi oluşturan, bu teknoloji
                    ile yeni dönem iş yapış biçimlerinin önündeki zorlukların
                    giderilmesine yönelik çalışmaları bulunan Blockchain Türkiye
                    Platformu'na platin üye olduk.
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
