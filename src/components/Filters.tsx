"use client";

import React from 'react';
import { CANDIDATE_STAGES } from '@/constants';
import { useFilterStore, ScoreRange } from '@/store/useFilterStore';
import { Search, X } from 'lucide-react';
import { CandidateStatus } from '@/types';

const Filters: React.FC = () => {
    const { filters, setFilter, resetFilters } = useFilterStore();

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
                        onChange={(e) => setFilter("search", e.target.value)}
                    />
                </label>

                {/* Stage Filter */}
                <select
                    className="select w-40"
                    value={filters.stage}
                    onChange={(e) => setFilter("stage", e.target.value as CandidateStatus | "All")}
                >
                    <option value="All">All Stages</option>
                    {CANDIDATE_STAGES.map((stage) => (
                        <option key={stage.label} value={stage.label}>{stage.label}</option>
                    ))}
                </select>

                {/* Experience Filter */}
                <select
                    className="select w-40"
                    value={filters.experience}
                    onChange={(e) => setFilter("experience", e.target.value)}
                >
                    <option value="All">All Experience</option>
                    <option value="0-2">0-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="6+">6+ years</option>
                </select>

                {/* Score Filter */}
                <select
                    className="select w-40"
                    value={filters.scoreRange}
                    onChange={(e) => setFilter("scoreRange", e.target.value as ScoreRange)}
                >
                    <option value="All">All Scores</option>
                    <option value="81-100">81-100%</option>
                    <option value="61-80">61-80%</option>
                    <option value="41-60">41-60%</option>
                    <option value="21-40">21-40%</option>
                    <option value="0-20">0-20%</option>
                </select>

                <button
                    className="btn btn-error btn-soft btn-square btn-md"
                    onClick={resetFilters}
                    title="Clear filters"
                >
                    <X />
                </button>
            </div>
        </React.Fragment>
    )
}

export default Filters;