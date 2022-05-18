import React, { useState } from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'high' | 'low' | 'middle'
export interface IAffair {
    _id: number,
    name: string,
    priority: string
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<IAffair> = [
    { _id: 1, name: 'React', priority: 'high' },
    { _id: 2, name: 'anime', priority: 'low' },
    { _id: 3, name: 'games', priority: 'low' },
    { _id: 4, name: 'work', priority: 'high' },
    { _id: 5, name: 'html & css', priority: 'middle' },
]

// pure helper functions
export const filterAffairs = (affairs: Array<IAffair>, filter: FilterType): Array<IAffair> => {
    if (filter === 'all') return affairs;
    else if (filter === 'low') return affairs.filter(af => af.priority === filter);
    else if (filter === 'middle') return affairs.filter(af => af.priority === filter);
    else if (filter === 'high') return affairs.filter(af => af.priority === filter);
    else return affairs
}
export const deleteAffair = (affairs: Array<IAffair>, _id: number): Array<IAffair> => { 
    return affairs.filter(af => af._id !== _id) // need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<IAffair>>(defaultAffairs) 
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))
    return (
        <div>
            <hr />
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr />
        </div>
    )
}

export default HW2
