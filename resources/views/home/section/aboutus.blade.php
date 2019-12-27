@extends('layouts.master')
@section('main-content')

<section class="hero-wrap hero-wrap-2" style="background-image: url('images/bg_1.jpg');" data-stellar-background-ratio="0.5">
    <div class="overlay"></div>
    <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center">
            <div class="col-md-9 ftco-animate text-center">
                <h1 class="mb-2 bread">About Us</h1>
                <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home <i class="ion-ios-arrow-forward"></i></a></span> <span>About us <i class="ion-ios-arrow-forward"></i></span></p>
            </div>
        </div>
    </div>
</section>



<section class="ftco-section">
    <div class="container">
        <div class="row no-gutters">
            <div class="col-md-5 p-md-5 img img-2 mt-5 mt-md-0" style="background-image: url(images/krishna.JPG);">
            </div>
            <div class="col-md-7 wrap-about py-5 px-4 px-md-5 ftco-animate">
                <div class="heading-section mb-5">
                    @foreach($aboutus_data as $aboutus_data)
                    <h2 class="mb-4">{{$aboutus_data->title}}</h2>

                </div>
                <div class="">

                   <p>{{$aboutus_data->content}}</p>
                        @endforeach
                </div>
            </div>
        </div>
    </div>
</section>

<section class="ftco-section testimony-section ftco-no-pt">
    <div class="container">
        <div class="row ftco-animate">
            <div class="col-md-6 col-lg-6 col-xl-4">
                <div class="heading-section ftco-animate">
                    <span class="subheading">Services</span>
                    <h2 class="mb-4">Experience Great Services</h2>
                </div>
                <div class="services-flow">
                    <div class="services-2 p-4 d-flex ftco-animate">
                        <div class="icon">
                            <span class="flaticon-engineer"></span>
                        </div>
                        <div class="text">
                            <h3>Expert &amp; Professional</h3>
                            <p>We provide a expert serivce for your home for water maintaince</p>
                        </div>
                    </div>
                    <div class="services-2 p-4 d-flex ftco-animate">
                        <div class="icon">
                            <span class="flaticon-engineer-1"></span>
                        </div>
                        <div class="text">
                            <h3>Clean Purified Water</h3>
                            <p>We provide a Clean water approx 324 Houses. and 70 pulic water tap</p>
                        </div>
                    </div>

                </div>
            </div>
            <div class="col-xl-1 d-xl-block d-none"></div>
            <div class="col-md-6 col-lg-6 col-xl-7">
                <div class="heading-section ftco-animate mb-5">
                    <span class="subheading">Testimonials</span>
                    <h2 class="mb-4">Feedback from Customer</h2>
                    <p>Organization with slogan of "A WATER FOR ALL" distribute water to all the Villages touched with Talku Municipality. With a sister concern of providing clean water for every one we have invested uch more capital. so lets look at a feed back below</p>
                </div>
                <div class="carousel-testimony owl-carousel">
                    @foreach($feedback_data as $feedback_data)
                        <div class="item">
                            <div class="testimony-wrap">
                                <div class="text bg-light p-4">
                  	<span class="quote d-flex align-items-center justify-content-center">
                      <i class="icon-quote-left"></i>
                    </span>
                                    <p>{{$feedback_data->message}}</p>
                                    <p class="name">{{$feedback_data->name}}</p>
                                    <span class="position">{{$feedback_data->email}}</span>
                                </div>
                                {{--                                <div class="user-img" style="background-image: url(images/person_1.jpg)">--}}
                                {{--                                </div>--}}
                            </div>
                        </div>
                    @endforeach
            </div>
        </div>
    </div>
</section>




<section class="ftco-section">
    <div class="container">
        <div class="row justify-content-center mb-5 pb-2">
            <div class="col-md-8 text-center heading-section ftco-animate">
                <span class="subheading">Team</span>
                <h2 class="mb-4">Our Professional Team</h2>
                <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
            </div>
        </div>
        <div class="row">
            @foreach($team_info as $team_info)
                <div class="col-md-6 col-lg-3 ftco-animate">
                    <div class="staff">
                        <div class="img-wrap d-flex align-items-stretch">
                            <div class="img align-self-stretch" style="background-image: url({{$team_info->image}});"></div>
                        </div>
                        <div class="text pt-3 text-center">
                            <h3>{{$team_info->name}}</h3>
                            <span class="position mb-2">{{ $team_info->designation }}</span>
                            <div class="faded">
                                <!-- <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p> -->
                                <ul class="ftco-social text-center">
                                    <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
                                    <li class="ftco-animate"><a href="{{$team_info->fb}}"><span class="icon-facebook"></span></a></li>
                                    <li class="ftco-animate"><a href="#"><span class="icon-google-plus"></span></a></li>
                                    <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            @endforeach

        </div>
    </div>
</section>
@endsection
