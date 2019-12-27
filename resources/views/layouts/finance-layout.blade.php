
<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>@yield('title')</title>
  <!-- plugins:css -->
 <link rel="stylesheet" href="{{ asset('css/app.css') }}">
  <!-- endinject -->
  <link rel="shortcut icon" href="../../images/favicon.png" />
</head>

<body>
  <div class="container-scroller">
    <!-- partial:../../partials/_navbar.html -->
    <nav class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <a class="navbar-brand brand-logo" href="../../index.html"><b>Talku Sim Khanepani </b></a>
        <a class="navbar-brand brand-logo-mini" href="../../index.html"><img src="../../images/logo-mini.svg" alt="logo"/></a>
      </div>
      <div class="navbar-menu-wrapper d-flex align-items-stretch">
       <!--  <div class="search-field d-none d-md-block">
          <form class="d-flex align-items-center h-100" action="#">
            <div class="input-group">
              <div class="input-group-prepend bg-transparent">
                  <i class="input-group-text border-0 mdi mdi-magnify"></i>
              </div>
              <input type="text" class="form-control bg-transparent border-0" placeholder="Search projects">
            </div>
          </form>
        </div> -->
        <ul class="navbar-nav navbar-nav-right">
          <li class="nav-item nav-profile dropdown">
            <a class="nav-link dropdown-toggle" id="profileDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
              <div class="nav-profile-img">
                <img src="../../images/faces/face1.jpg" alt="image">

              </div>
              <div class="nav-profile-text">
                <p class="mb-1 text-black">{{ Auth::user()->name}}</p>
              </div>
            </a>


          </li>
          <li class="nav-item d-none d-lg-block full-screen-link">
            <a class="nav-link">
              <i class="mdi mdi-fullscreen" id="fullscreen-button"></i>
            </a>
          </li>


          <li class="nav-item nav-logout d-none d-lg-block">


                                     <i class="mdi mdi-power"></a></i>

          </li>

        </ul>
        <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
          <span class="mdi mdi-menu"></span>
        </button>
      </div>
    </nav>
    <!-- partial -->
    <div class="container-fluid page-body-wrapper">
      <!-- partial:../../partials/_sidebar.html -->
      <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
          <li class="nav-item nav-profile">
            <a href="#" class="nav-link">
              <div class="nav-profile-image">
                <img src="../../images/faces/face1.jpg" alt="profile">
                <span class="login-status online"></span> <!--change to offline or busy as needed-->
              </div>
              <div class="nav-profile-text d-flex flex-column">
                <span class="font-weight-bold mb-2">{{ Auth::user()->email}}</span>
                <span class="text-secondary text-small">{{ Auth::user()->name}}</span>
              </div>
              <i class="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="{{ route('finance') }}">
              <span class="menu-title">Other Managements </span>
              <i class="mdi mdi-home menu-icon"></i>
            </a>
          </li>
           <li class="nav-item">
            <a class="nav-link" href="{{ route('invoice') }}">
              <span class="menu-title">Invoicing</span>
              <i class="mdi mdi-cloud-upload menu-icon"></i>
            </a>
            <li class="nav-item">
            <a class="nav-link" href="{{ route('bills') }}">
              <span class="menu-title">Bill management</span>
              <i class="mdi mdi-cloud-upload menu-icon"></i>
            </a>
            <li class="nav-item">
            <a class="nav-link" href="{{ route('settlement') }}">
              <span class="menu-title">Statements and Details</span>
              <i class="mdi mdi-cloud-upload menu-icon"></i>
            </a>




        </ul>
      </nav>
      <!-- partial -->
      <div class="main-panel">
        <div class="content-wrapper">

          @yield('main-content')
        </div>
        <!-- content-wrapper ends -->
        <!-- partial:../../partials/_footer.html -->
        <footer class="footer">
          <div class="d-sm-flex justify-content-center justify-content-sm-between">
            <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © {{ date('Y') }} <a href="{{ route('home') }}" target="_blank">Talku Sim Khanepani</a>. All rights reserved.</span>
            <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Empowered by Sunil Balami</span>
          </div>
        </footer>
        <!-- partial -->
      </div>
      <!-- main-panel ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
  <!-- container-scroller -->
 <script src="{{ asset('js/manifest.js') }}"></script>
 <script src="{{ asset('js/vendor.js') }}"></script>
 <script src="{{ asset('js/app.js') }}"></script>
 @yield('script')
</body>

</html>
