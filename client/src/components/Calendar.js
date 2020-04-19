import React,{useState,useEffect} from 'react';
import '../styles/Calendar.scss';
import moment, { Moment as MomentTypes } from 'moment';

function Calendar() {
  function generate(params=0) {
    let today=""
    if(params>=0){
      today = moment().add(params,'months');
    }else{
      today = moment().subtract(Math.abs(params),'months');
    }
    const startWeek = today.clone().startOf('month').week(); //현재 달의 시작 주 
    const endWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week(); //현재 달의 마지막 주
    let calendar = [];
    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        <div className="row" key={week}>
          {
            Array(7).fill(0).map((n, i) => {
              let current = today.clone().week(week).startOf('week').add(n + i, 'day')
              let isSelected = today.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'selected' : '';

              let isGrayed = current.format('MM') === today.format('MM') ? '' : 'grayed';
            
              return (
                <div className={`box  ${isSelected} ${isGrayed}`} key={i}>
                  <span className={`text`}>{current.format('D')}</span>
                </div>
              )
            })
          }
        </div>
      )
    }
    return calendar;
  }
  const [params,setParams]=useState(0);
  const [test,setTest]=useState(generate());
  const [current,setCurrent]=useState(moment().format('YYYY-MM'));
  const changeDate=(e)=>{
    if(e.target.name==="pre"){
      setParams(params-1);
      setTest(generate(params));
      setCurrent(moment().subtract(Math.abs(params),'months').format('YYYY-MM'));
    }else{
      setParams(params+1);
      setTest(generate(params));
      setCurrent(moment().add(params,'months').format('YYYY-MM'));
    }
  }
  return (
    <div className="Calendar">
      <div className="head">
      <button onClick={changeDate} name="pre">전</button>
      <span className="title">{current}</span>  
      <button onClick={changeDate} name="nex">후</button>
      </div>
      <div className="body">
        <div className="row">
          <div className="box">
            <span className="text">일</span>
          </div>
          <div className="box">
            <span className="text">월</span>
          </div>
          <div className="box">
            <span className="text">화</span>
          </div>
          <div className="box">
            <span className="text">수</span>
          </div>
          <div className="box">
            <span className="text">목</span>
          </div>
          <div className="box">
            <span className="text">금</span>
          </div>
          <div className="box">
            <span className="text">토</span>
          </div>
        </div>
        {test}
      </div>
    </div>
  )
}
export default Calendar;
