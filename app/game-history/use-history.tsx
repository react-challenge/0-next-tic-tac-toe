"use client";

import { useState } from "react";

export default function useHistory(toSomeStep: (stepInfo: any) => any) {
    const [historyList, setHistoryList] = useState([] as any)

    const historyDom = historyList.map((item: any, index: number) => {
        return (
            <div className="history-sec" key={index}>
                <button onClick={(e) => toSomeStep(item)}>{index+2}. Go to move #{index+1}, current {item.current}</button>
            </div>
        )
    })

    const setHistory = (curStepInfo?: Record<string, any>) => {
        if (curStepInfo) {
            setHistoryList([...historyList, curStepInfo]);
        } else {
            setHistoryList([])
        }
        
    }

    return {
        historyDom,
        setHistory
    }
}