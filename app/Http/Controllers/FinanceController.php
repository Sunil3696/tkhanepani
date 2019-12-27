<?php

namespace App\Http\Controllers;

use App\Bill;
use App\User;
use DemeterChain\B;
use Illuminate\Http\Request;

class FinanceController extends Controller
{
    public function list(){
        $bills = new Bill;
        $bills = Bill::select('username')->distinct()->get();
        return view('finance.bills')->with('bill_info', $bills);
    }
    public function bill_add(){
        $user = new User;
        $user = User::all();
        return view('finance.bill-add')->with('user_info', $user);

    }
    public function submit(Request $request){
//        dd($request);
        $bills = new Bill;
        $this->validate($request,[
            'username' => 'required',
            'bill_no' => 'required',
            'unit' => 'required',
            'rate' => 'required',

        ]);
//        dd($request);
        $bills->username = $request->input('username');
        $bills->bill_no = $request->input('bill_no');
        $bills->unit = $request->input('unit');
        $bills->rate = $request->input('rate');
        $total = $request->input('unit') * $request->input('rate');
        $bills->total = $total;
        $bills->paid = $request->input('Paid');
        $success = $bills->save();
        if ($success){
            return redirect('admin/bills')->with('status', 'Bills added Succeed');
        }


    }

    public function view_bill(Request $request){
        $bills = new Bill;
        $username = $request->input('username');
//        dd($username);

        $bills = Bill::all()->where('username', "=", $username);

        return view('finance.invoice')
            ->with('username', $username)
            ->with('bill_info', $bills);

    }

    public function settlement(){
        $bills = new Bill;
        $bills = Bill::all()->where('paid' , "=", "no" );
//        dd($bills);
        return view('finance.unpaid_bill')->with('bills_info', $bills);
    }


    public function bill_edit($id){
        $bills = new Bill;
        $user = new User;
        $user = User::all();
        $bills = $bills->find($id);
        if (!$bills){
            return redirect('admin/settlement')->with('status', 'Bill Not Found');
        }else{
         return view('finance.bill-add')
             ->with('user_info', $user)
             ->with('bill_edit_info', $bills);
        }
    }
    public function bill_edit_submit( Request $request ,$id){
//    dd($request);
        $bills = new Bill;
        $bills = $bills->find($id);
        $this->validate($request,[
            'username' => 'required',
            'bill_no' => 'required',
            'unit' => 'required',
            'rate' => 'required',

        ]);
//        dd($request);
        $bills->username = $request->input('username');
        $bills->bill_no = $request->input('bill_no');
        $bills->unit = $request->input('unit');
        $bills->rate = $request->input('rate');
        $total = $request->input('unit') * $request->input('rate');
        $bills->total = $total;
        $bills->paid = $request->input('Paid');
        $success = $bills->save();
        if ($success){
            return redirect('admin/bills')->with('status', 'Bills added Succeed');
        }


    }

    public function bill_delete( $id){
        $bills = new Bill;
        $bills = $bills->find($id);
        if (!$bills){
            return redirect('admin/settlement')->with('status', 'Bill Not Found');

        }else{
            $bills->delete($id);
            return redirect('admin/settlement')->with('status','Bill deleted successfully');
        }
    }
}
