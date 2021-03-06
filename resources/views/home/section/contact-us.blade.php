@extends('layouts.master')
@section('main-content')
<section class="hero-wrap hero-wrap-2" style="background-image: url('{{ asset('images/bg_1.jpg') }}');" data-stellar-background-ratio="0.5">
    <div class="overlay"></div>
    <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center">
            <div class="col-md-9 ftco-animate text-center">
                <h1 class="mb-2 bread">Contact Us</h1>
                <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home <i class="ion-ios-arrow-forward"></i></a></span> <span>Contact <i class="ion-ios-arrow-forward"></i></span></p>
            </div>
        </div>
    </div>
</section>

<section class="ftco-section ftco-no-pt ftco-no-pb contact-section">
    <div class="container">
        <div class="row d-flex align-items-stretch no-gutters">
            <div class="col-md-6 p-4 p-md-5 order-md-last bg-light">

                <form action="{{ route('feedback') }}" method="post">
                    @csrf
                    @if(session('status'))
                        <div class=" alert alert-success" style="margin: 0px; padding: 0px;">
                            {{ session('status')  }}
                        </div>
                    @endif
                    <div class="form-group">
                        <input type="text" name="name" class="form-control" placeholder="Your Name">
                    </div>
                    <div class="form-group">
                        <input type="email"  name="email" class="form-control" placeholder="Your Email">
                    </div>
                    <div class="form-group">
                        <input type="text"  name="subject" class="form-control" placeholder="Subject">
                    </div>
                    <div class="form-group">
                        <textarea name="message" id="" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
                    </div>
                    <div class="form-group">
                        <input type="submit" value="Send Message" class="btn btn-primary py-3 px-5">
                    </div>
                </form>

            </div>
            <div class="col-md-6 d-flex align-items-stretch">
                <div id="map"></div>
            </div>
        </div>
    </div>
</section>

<section class="ftco-section contact-section">
    <div class="container">
        <div class="row d-flex mb-5 contact-info">
            <div class="col-md-12 mb-4">
                <h2 class="h4">Contact Information</h2>
            </div>
            <div class="w-100"></div>
            <div class="col-md-3 d-flex">
                <div class="bg-light d-flex align-self-stretch box p-4">
                    <p><span>Address:</span>Talku, Pharping  Ward no: 09 , Nepal</p>
                </div>
            </div>
            <div class="col-md-3 d-flex">
                <div class="bg-light d-flex align-self-stretch box p-4">
                    <p><span>Phone:</span> <a href="tel://1234567920">01-4710-354</a></p>
                </div>
            </div>
            <div class="col-md-3 d-flex">
                <div class="bg-light d-flex align-self-stretch box p-4">
                    <p><span>Email:</span> <a href="#">info@tkhanepani.com</a></p>
                </div>
            </div>
            <div class="col-md-3 d-flex">
                <div class="bg-light d-flex align-self-stretch box p-4">
                    <p><span>Website</span> <a href="#">tkhanepani.loc</a></p>
                </div>
            </div>
        </div>
    </div>
</section>

 @endsection
