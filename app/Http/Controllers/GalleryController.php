<?php

namespace App\Http\Controllers;
use App\Gallery;
use Illuminate\Http\Request;

class GalleryController extends Controller
{
    
    public function gallery_list(){
    	$gallery = new Gallery;
    	$gallery = Gallery::all();
    	return view('admin.gallery')->with('Gallery_info', $gallery);
    }

    public function submit(Request $request){
    	$gallery = new Gallery;
    	//dd($request);

    	$this->validate($request,[
    		'title' => 'required',
    		'description' => 'required',
    		'taken_at' => 'required',
    		'status' => 'required',
    		'filepath' =>'required'

    	]);
    	//dd($request);
    	$gallery->title = $request->input('title');
    	$gallery->description = $request->input('description');
    	$gallery->taken_at = $request->input('taken_at');
    	$gallery->status = $request->input('status');
    	$gallery->image = $request->input('filepath');
    	$success = $gallery->save();

    	if ($success) {
    		return redirect('admin/gallery')->with('status', 'Image added Done');
    	}    	
    }

    public function edit($id){

        $gallery = new Gallery;
        $gallery = $gallery->find($id);
        if (!$gallery) {
            return redirect('admin/gallery')->with('error','Image not found');
        }else{
            return view('admin.gallery-add')->with('Gallery_edit_info', $gallery);
        }
    }


    public function gallery_edit_submit(Request $request , $id){
        $gallery = new Gallery;
        $gallery = $gallery->find($id);
        //dd($request);

        $this->validate($request,[
            'title' => 'required',
            'description' => 'required',
            'taken_at' => 'required',
            'status' => 'required',
            'filepath' =>'required'

        ]);
        //dd($request);
        $gallery->title = $request->input('title');
        $gallery->description = $request->input('description');
        $gallery->taken_at = $request->input('taken_at');
        $gallery->status = $request->input('status');
        $gallery->image = $request->input('filepath');
        $success = $gallery->save();

        if ($success) {
            return redirect('admin/gallery')->with('status', 'Image Details Updated Succesfully');
        }

    }

    public function delete($id){
        $gallery = new Gallery;
        $gallery  = $gallery->find($id);
        if ($gallery) {
            $success = $gallery->delete($id);
            return redirect('admin/gallery')->with('status','Image deleted Successfully');
        }else{
            return redirect('admin/gallery')->with('error','Image cant be Deleted');
        }
    }
}
