<?php

namespace App\Http\Controllers;
use App\Banner;
use Illuminate\Http\Request;

class BannerController extends Controller
{
    public function banner_list(){
    	$banner = new Banner;
    	$banner = Banner::all();
        return view('admin.banner')->with('Banner_info', $banner);
    }
	public function submit(Request $request){
		$banner  = new Banner;
		$this->validate($request, [
            'title' => 'required',
            'link' => 'required',
            'status' => 'required',
            'filepath' => 'required'

        ]);
		  // dd($request);
		$banner->title = $request->input('title');
		$banner->link = $request->input('link');
		$banner->status = $request->input('status');
		$banner->image = $request->input('filepath');
		$success = $banner->save();

		if ($success) {
			return redirect('admin/banner-management')->with('status','Banner added Succesfully');
		}
	}  

	public function Banner_Edit($id){
		$banner = new Banner;
		$banner = $banner->find($id);
		if(!$banner){
			return redirect('admin.banner')->with('error','Banner Not Found');
		}else{
			return view('admin.banner-add')->with('Banner_edit_info',$banner);
		}
	}  

	public function Banner_Edit_Submit(Request $request, $id){
		$banner = new Banner;
		$banner = $banner->find($id);

		$this->validate($request, [
            'title' => 'required',
            'link' => 'required',
            'status' => 'required',
            'filepath' => 'required'

        ]);

       	$banner->title = $request->input('title');
		$banner->link = $request->input('link');
		$banner->status = $request->input('status');
		$banner->image = $request->input('filepath');
		$success = $banner->save();

		if ($success) {
			return redirect('admin/banner-management');
		}
	} 

	public function Banner_Delete($id){
		$banner = new Banner;
		$banner = $banner->find($id);

		if ($banner) {
			$banner->delete($id);
			return redirect('admin/banner-management')->with('status','Banner deleted successfully');
		}else{
			return redirect('admin/banner-management')->with('error','Banner Cant be Deleted');
		}
	}

}
