@extends('layouts.login-layout')

@section('content')

                    <form method="POST" action="{{ route('login') }}" class="pt-3">
                        @csrf
            <div class="form-group">              
                 <input id="email exampleInputEmail1" type="email" class="form-control form-control-lg @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus placeholder="Email Id goes here">
                  @error('email')
                   <span class="invalid-feedback" role="alert">
                     <strong>{{ $message }}</strong>
                      </span>
                    @enderror
                </div>




<div class="form-group">
                

                  <input id="password exampleInputPassword1" type="password" class="form-control form-control-lg @error('password') is-invalid @enderror" name="password" required autocomplete="current-password" placeholder="Password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                </div>

                        
                        <div class="my-2 d-flex justify-content-between align-items-center">
                  <div class="form-check">
                    <label class="form-check-label text-muted" for="remember">
                         {{ __('Remember Me') }}
                      <input type="checkbox" class="form-check-input" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                      Keep me signed in
                    </label>
                  </div>
              </div>
                       
                          <div class="mt-4">
                                <button type="submit" class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn">
                                    {{ __('Login') }}
                                </button>

                                @if (Route::has('password.request'))
                                    <a class="auth-link text-black" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                @endif
                           
                        </div>
                    </form>


@endsection
