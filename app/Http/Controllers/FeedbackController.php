<?php

namespace App\Http\Controllers;

use App\Feedback;
use Illuminate\Http\Request;

class FeedbackController extends Controller
{
    public function submit(Request $request){
//        dd($request);
        $feedback = new Feedback;
        $this->validate($request,[
           'name' => 'required',
            'email' => 'required',
            'subject' => 'required',
            'message' => 'required'
        ]);
       $feedback->name = $request->input('name');
       $feedback->email = $request->input('email');
       $feedback->subject = $request->input('subject');
       $feedback->message = $request->input('message');
       $success = $feedback->save();

       if($success){
          return redirect('/contact-us')->with('status', 'Feedback received Thank you <3 For your Feedback');
       }



    }
}
