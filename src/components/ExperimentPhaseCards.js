import React from 'react';

/**
 * 実験フェーズとその詳細を表示するモバイル用カードコンポーネント
 * 
 * @param {Object[]} phases - フェーズの配列
 * @param {string} phases[].phaseName - フェーズの名前
 * @param {string} phases[].change - 環境の変化の説明
 * @param {string} phases[].challenge - 適応課題の説明
 * @param {boolean} phases[].isHighlighted - ハイライト表示するかどうか (オプション)
 */
export default function ExperimentPhaseCards({ phases }) {
  return (
    <div className="md:hidden space-y-4">
      {phases.map((phase, index) => (
        <div 
          key={index} 
          className={`${phase.isHighlighted ? 'bg-primary-light/30' : 'bg-white'} rounded-lg shadow-sm border border-primary/20 p-4`}
        >
          <h4 className="text-primary font-medium mb-2">{phase.phaseName}</h4>
          <div className="grid grid-cols-1 gap-2">
            <div>
              <div className="text-xs text-primary font-medium">環境の変化</div>
              <div className="text-text">{phase.change}</div>
            </div>
            <div>
              <div className="text-xs text-primary font-medium">適応課題</div>
              <div className="text-text">{phase.challenge}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}