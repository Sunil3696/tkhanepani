@extends('layouts.master')
@section('main-content')
{{--    {{dd($banner_data)}}--}}

    <section class="home-slider owl-carousel">
        @foreach($banner_data as $Banner_data)
        <div class="slider-item" style="background-image:url({{ $Banner_data->image }});" data-stellar-background-ratio="0.5">
            <div class="overlay"></div>
            <div class="container">
                <div class="row no-gutters slider-text align-items-center justify-content-end" data-scrollax-parent="true">
                    <div class="col-md-6 text ftco-animate pl-md-5">
                        <h1 class="mb-4"><span>{{ $Banner_data->title }}</span></h1>
{{--                        <h3 class="subheading">A small river named Duden flows by their place and supplies it with the necessary regelialia</h3>--}}
{{--                        <p><a href="#" class="btn btn-secondary px-4 py-3 mt-3">Request A Quote</a></p>--}}
                    </div>
                </div>
            </div>
        </div>
            @endforeach


    </section>



    <section class="ftco-section ftco-no-pt ftco-margin-top">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="request-quote">
                        <div class="bg-primary py-4">
                            <span class="subheading">Get a Service</span>
                            <h3>Request A Appointment</h3>
                        </div>
                        <form action="#" class="request-form ftco-animate">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="First Name">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Last Name">
                            </div>
                            <div class="form-group">
                                <div class="form-field">
                                    <div class="select-wrap">
                                        <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                        <select name="" id="" class="form-control">
                                            <option value="">Select Your Services</option>
                                            <option value="">Construction</option>
                                            <option value="">Renovation</option>
                                            <option value="">Interior Design</option>
                                            <option value="">Exterior Design</option>
                                            <option value="">Painting</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Phone">
                            </div>
                            <div class="form-group">
                                <textarea name="" id="" cols="30" rows="2" class="form-control" placeholder="Message"></textarea>
                            </div>
                            <div class="form-group">
                                <input type="submit" value="Appointment" class="btn btn-primary py-3 px-4">
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-8 wrap-about py-5 ftco-animate">
                    <div class="heading-section mb-5">
                        @foreach($aboutus_data as $aboutus_data)
                        <h2 class="mb-4">{{$aboutus_data->title}}</h2>
                    </div>
                    <div class="">
                        <p class="mb-5">{{$aboutus_data->content}}</p>
                       @endforeach
                        <p><a href="{{route('about-us')}}" class="btn btn-secondary px-5 py-3">Read More</a></p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="ftco-services ftco-no-pt">
        <div class="container">
            <div class="row justify-content-center mb-5 pb-2">
                <div class="col-md-8 text-center heading-section ftco-animate">
                    <span class="subheading">Services</span>
                    <h2 class="mb-4">Our Services</h2>
                    <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 d-flex services align-self-stretch p-4 ftco-animate">
                    <div class="media block-6 d-block text-center">
                        <div class="icon d-flex justify-content-center align-items-center">
                            <span class="flaticon-hook"></span>
                        </div>
                        <div class="media-body p-2 mt-3">
                            <h3 class="heading">Expert & Professional</h3>
                            <p>EWe provide a expert serivce for your home for water maintaince</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 d-flex services align-self-stretch p-4 ftco-animate">
                    <div class="media block-6 d-block text-center">
                        <div class="icon d-flex justify-content-center align-items-center">
                            <span class="flaticon-skyline"></span>
                        </div>
                        <div class="media-body p-2 mt-3">
                            <h3 class="heading">Purified Water</h3>
                            <p>We provide fully purified water on your tap on reasonable price</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 d-flex services align-self-stretch p-4 ftco-animate">
                    <div class="media block-6 d-block text-center">
                        <div class="icon d-flex justify-content-center align-items-center">
                            <span class="flaticon-stairs"></span>
                        </div>
                        <div class="media-body p-2 mt-3">
                            <h3 class="heading">Tools and Machine</h3>
                            <p>you can find all the water related machines here  at very reasonable price</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 d-flex services align-self-stretch p-4 ftco-animate">
                    <div class="media block-6 d-block text-center">
                        <div class="icon d-flex justify-content-center align-items-center">
                            <span class="flaticon-home"></span>
                        </div>
                        <div class="media-body p-2 mt-3">
                            <h3 class="heading">Architecture Design</h3>
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="ftco-intro" style="background-image: url(images/bg_3.jpg);" data-stellar-background-ratio="0.5">
        <div class="overlay"></div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9 text-center">
                    <h2>Lets Know you Water Schedule</h2>
                    <p>Water Schedule can be changed or can be differ depends on the situation</p>
                    <p class="mb-0"><a href="{{ route('water_schedule') }}" class="btn btn-primary px-4 py-3">Know You Schede Here</a></p>
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

    <section class="ftco-section ftco-no-pt ftco-no-pb">
        <div class="container-fluid p-0">
            <div class="row no-gutters justify-content-center mb-5 pb-2">
                <div class="col-md-6 text-center heading-section ftco-animate">
                    <span class="subheading">Projects</span>
                    <h2 class="mb-4">Featured Projects</h2>
                    <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
                </div>
            </div>
            <div class="row no-gutters">
                @foreach($gallery_data as $gallery_data)
                <div class="col-md-6 col-lg-3 ftco-animate">
                    <div class="project">
                        <img src="{{ $gallery_data->image }}" class="img-fluid" alt="Colorlib Template">
                        <div class="text">
                            <span>{{ $gallery_data->title }}</span>
                            <h3><a href="project.html">{{ $gallery_data->description }}</a></h3>
                        </div>
                        <a href="{{ $gallery_data->image }}" class="icon image-popup d-flex justify-content-center align-items-center">
                            <span class="icon-expand"></span>
                        </a>
                    </div>
                </div>
                    @endforeach

            </div>
        </div>
    </section>
    <section class="ftco-counter img" id="section-counter" style="background-image: url(images/bg_3.jpg);" data-stellar-background-ratio="0.5">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                    <div class="block-18 d-flex">
                        <div class="text d-flex align-items-center">
                            <strong class="number" data-number="30">0</strong>
                        </div>
                        <div class="text-2">
                            <span>Years of <br>Experienced</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                    <div class="block-18 d-flex">
                        <div class="text d-flex align-items-center">
                            <strong class="number" data-number="1500">0</strong>
                        </div>
                        <div class="text-2">
                            <span>Project <br>Successful</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                    <div class="block-18 d-flex">
                        <div class="text d-flex align-items-center">
                            <strong class="number" data-number="100">0</strong>
                        </div>
                        <div class="text-2">
                            <span>Professional <br>Expert</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                    <div class="block-18 d-flex">
                        <div class="text d-flex align-items-center">
                            <strong class="number" data-number="354">0</strong>
                        </div>
                        <div class="text-2">
                            <span>Happy <br>Customers</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="ftco-section testimony-section">
        <div class="container">
            <div class="row ftco-animate">
                <div class="col-md-6 col-lg-6 col-xl-4">
                    <div class="heading-section ftco-animate">
                        <span class="subheading">SERVICES</span>
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
{{--                        <div class="services-2 p-4 d-flex ftco-animate">--}}
{{--                            <div class="icon">--}}
{{--                                <span class="flaticon-engineer-2"></span>--}}
{{--                            </div>--}}
{{--                            <div class="text">--}}
{{--                                <h3>24/7 Help Support</h3>--}}
{{--                                <p>Separated they live in. A small river named Duden flows</p>--}}
{{--                            </div>--}}
{{--                        </div>--}}
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
        </div>
    </section>


{{--    <section class="ftco-section bg-light">--}}
{{--        <div class="container">--}}
{{--            <div class="row justify-content-center mb-5 pb-2">--}}
{{--                <div class="col-md-8 text-center heading-section ftco-animate">--}}
{{--                    <span class="subheading">Blog</span>--}}
{{--                    <h2 class="mb-4">Recent Blog</h2>--}}
{{--                    <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>--}}
{{--                </div>--}}
{{--            </div>--}}
{{--            <div class="row">--}}
{{--                <div class="col-md-4 ftco-animate">--}}
{{--                    <div class="blog-entry">--}}
{{--                        <a href="blog-single.html" class="block-20" style="background-image: url('images/image_1.jpg');">--}}
{{--                            <div class="meta-date text-center p-2">--}}
{{--                                <span class="day">07</span>--}}
{{--                                <span class="mos">February</span>--}}
{{--                                <span class="yr">2019</span>--}}
{{--                            </div>--}}
{{--                        </a>--}}
{{--                        <div class="text pt-4">--}}
{{--                            <h3 class="heading"><a href="#">Office of the Florida</a></h3>--}}
{{--                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>--}}
{{--                            <div class="d-flex align-items-center mt-4">--}}
{{--                                <p class="mb-0"><a href="#" class="btn btn-primary">Read More <span class="ion-ios-arrow-round-forward"></span></a></p>--}}
{{--                                <p class="ml-auto mb-0">--}}
{{--                                    <a href="#" class="mr-2">Admin</a>--}}
{{--                                    <a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a>--}}
{{--                                </p>--}}
{{--                            </div>--}}
{{--                        </div>--}}
{{--                    </div>--}}
{{--                </div>--}}
{{--                <div class="col-md-4 ftco-animate">--}}
{{--                    <div class="blog-entry">--}}
{{--                        <a href="blog-single.html" class="block-20" style="background-image: url('images/image_2.jpg');">--}}
{{--                            <div class="meta-date text-center p-2">--}}
{{--                                <span class="day">07</span>--}}
{{--                                <span class="mos">February</span>--}}
{{--                                <span class="yr">2019</span>--}}
{{--                            </div>--}}
{{--                        </a>--}}
{{--                        <div class="text pt-4">--}}
{{--                            <h3 class="heading"><a href="#">Office of the Florida</a></h3>--}}
{{--                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>--}}
{{--                            <div class="d-flex align-items-center mt-4">--}}
{{--                                <p class="mb-0"><a href="#" class="btn btn-primary">Read More <span class="ion-ios-arrow-round-forward"></span></a></p>--}}
{{--                                <p class="ml-auto mb-0">--}}
{{--                                    <a href="#" class="mr-2">Admin</a>--}}
{{--                                    <a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a>--}}
{{--                                </p>--}}
{{--                            </div>--}}
{{--                        </div>--}}
{{--                    </div>--}}
{{--                </div>--}}
{{--                <div class="col-md-4 ftco-animate">--}}
{{--                    <div class="blog-entry">--}}
{{--                        <a href="blog-single.html" class="block-20" style="background-image: url('images/image_3.jpg');">--}}
{{--                            <div class="meta-date text-center p-2">--}}
{{--                                <span class="day">07</span>--}}
{{--                                <span class="mos">February</span>--}}
{{--                                <span class="yr">2019</span>--}}
{{--                            </div>--}}
{{--                        </a>--}}
{{--                        <div class="text pt-4">--}}
{{--                            <h3 class="heading"><a href="#">Office of the Florida</a></h3>--}}
{{--                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>--}}
{{--                            <div class="d-flex align-items-center mt-4">--}}
{{--                                <p class="mb-0"><a href="#" class="btn btn-primary">Read More <span class="ion-ios-arrow-round-forward"></span></a></p>--}}
{{--                                <p class="ml-auto mb-0">--}}
{{--                                    <a href="#" class="mr-2">Admin</a>--}}
{{--                                    <a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a>--}}
{{--                                </p>--}}
{{--                            </div>--}}
{{--                        </div>--}}
{{--                    </div>--}}
{{--                </div>--}}
{{--            </div>--}}
{{--        </div>--}}
{{--    </section>--}}

    @endsection
