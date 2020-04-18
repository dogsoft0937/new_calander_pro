import React from 'react';
import '../styles/Calendar.scss';
import moment, { Moment as MomentTypes } from 'moment';

function Calendar() {
  function generate() {
    const today = moment();
    const startWeek = today.clone().startOf('month').week();
    const endWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
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
  return (
    <div className="Calendar">
      <div className="head">
        <span className="title">{moment().format('YYYY-MM-DD')}</span>
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
        {generate()}
      </div>
    </div>
  )
}
export default Calendar;