"use client";

import React, { useState } from 'react';
import { CANDIDATE_STAGES } from '@/constants';
import { Search, X } from 'lucide-react';

const Filters: React.FC = () => {

    const [filters, setFilters] = useState({
        search: '',
        stage: 'Select Stage',
        experience: 'Select Experience',
        score: 'Select Score'
    });

    return (
        <React.Fragment>
            <div className='py-4 px-2 rounded-box flex gap-4'>
                {/* Search Filter */}
                <label className="input">
                    <Search className='opacity-50' />
                    <input
                        type="text"
                        placeholder="Search by name or email..."
                        value={filters.search}
                        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                    />
                </label>

                {/* Stage Filter */}
                <select
                    defaultValue="Select Stage"
                    className="select w-40"
                    value={filters.stage}
                    onChange={(e) => setFilters({ ...filters, stage: e.target.value })}
                >
                    <option disabled={true}>Select Stage</option>
                    {CANDIDATE_STAGES.map((stage) => (
                        <option key={stage.label}>{stage.label}</option>
                    ))}
                </select>

                {/* Experience Filter */}
                <select
                    defaultValue="Select Experience"
                    className="select w-40"
                    value={filters.experience}
                    onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
                >
                    <option disabled={true}>Select Experience</option>
                    <option>0-2 years</option>
                    <option>3-5 years</option>
                    <option>6+ years</option>
                </select>

                {/* Score Filter */}
                <select
                    defaultValue="Select Score"
                    className="select w-40"
                    value={filters.score}
                    onChange={(e) => setFilters({ ...filters, score: e.target.value })}
                >
                    <option disabled={true}>Select Score</option>
                    <option>0-20%</option>
                    <option>21-40%</option>
                    <option>41-60%</option>
                    <option>61-80%</option>
                    <option>81-100%</option>
                </select>
                <button
                    className="btn btn-error btn-soft btn-square btn-md"
                    onClick={() => setFilters({
                        search: '',
                        stage: 'Select Stage',
                        experience: 'Select Experience',
                        score: 'Select Score'
                    })}>
                    <X />
                </button>
            </div>
        </React.Fragment>
    )
}

export default Filters;