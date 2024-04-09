const SplashBannerLg = () => {
  return (
    <div className="flex w-screen justify-center items-center">
      <div className="relative lg:w-4/5 h-64 overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/pw/AP1GczMAkqdIMOjZDWL-GEpLhyDlB7b-Sn1r2pe4ua-L_RGnYsotcc7VA2wax2cF0nv3cS-ZPbA6U4E9MGGmjEJQekLZZE9uo0eWGocYpOG2diZ9wqV-BRYCDwh85GyJNtOkTq2OAxovkZ2ZsBQCKF24AH3T1LbWABsUCsf7fbCk27sAxEAq2e06xW-CnhcztrhnqWHksYSMCj2RbvPekjRJvUmonedO0_mm-LavnUTrp0kGRmCsGD-K6fu0Mkc3ij9_0mNnbsIWaf4ruuI5efgI05wSG_zOgYtVFFcNo-Ss8asduWB5WltlerhpJKfqa_FIKO9iPBnnd_j7kuzMETKb5b6g2rIhzxqP1gRLF8igYYWbMvbtPwET5eRwNh3aLIw3kpvPdnmGItkdrs7m-IXaOQEaTD_PPfwKdMIrwKjr2gGPbgfY2ItIuZDIbAwYCzxiw36C6bcQC4Cwqr8mpvfAl_wjNWJ2yiPt8zKMgm_xpmomzA9M-QyppxuVFIDHS2Uol0vfjA2v9vePDl6VVcLLyqkQJDwGF9NoMNPW0wCFHrtiaCyJnTL65n1lTwG9UoHhiI7RTIgsS2cnh-Gn8H_7SeqRgLBvGKBKUyfdia1G26FRpTDULcuThSPqUpcc9PUKTYYwCVV4YPNFotPy4Egn_0avL9-WCCrNZ4WrskiOZjHhRiK4VaG7B7YVGr8yMO6UMbp3ey_ZyCcS1nQuyid4TO19Ln8O7_wZGcG5iNDP4XTchGXOmggPLZ9z1AiSHHK12AWNs40kdVhvM6GYegAoR1nrCVoo7LHx9lvk2NA0U7_TY8bLIHR6f57Z6ibVv234xpcDchhJZbV9MvgA1-jqkj69HznFRzr5LQWP1cbZSJV4fcozOfVqj2PcxwtT2BE84DzcBeebhIMf-ZvBCbvBWRMzhByZPe5PSSmMs2xXdpg0Gy3syY8W0rcmDgO55Q=w1099-h312-s-no?authuser=0" // Replace with your image URL
          alt="Splash Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 right-0 pr-16 py-4">
          <h2 className="text-white text-4xl font-bold">Artist of the Month</h2>
        </div>
      </div>
    </div>
  );
};

export default SplashBannerLg;
