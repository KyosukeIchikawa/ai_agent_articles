import React from 'react';

/**
 * 実験フェーズとその詳細を表示するテーブルコンポーネント
 * 
 * @param {Object[]} phases - フェーズの配列
 * @param {string} phases[].phaseName - フェーズの名前
 * @param {string} phases[].change - 環境の変化の説明
 * @param {string} phases[].challenge - 適応課題の説明
 * @param {boolean} phases[].isHighlighted - ハイライト表示するかどうか (オプション)
 */
export default function ExperimentTable({ phases }) {
  return (
    <div className="hidden md:block overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-primary-light">
            <th className="px-4 py-2 border border-primary/20 text-left text-primary">フェーズ</th>
            <th className="px-4 py-2 border border-primary/20 text-left text-primary">環境の変化</th>
            <th className="px-4 py-2 border border-primary/20 text-left text-primary">適応課題</th>
          </tr>
        </thead>
        <tbody>
          {phases.map((phase, index) => (
            <tr key={index} className={phase.isHighlighted ? "bg-primary-light/30" : "bg-white"}>
              <td className="px-4 py-2 border border-primary/20 font-medium text-primary">{phase.phaseName}</td>
              <td className="px-4 py-2 border border-primary/20 text-text">{phase.change}</td>
              <td className="px-4 py-2 border border-primary/20 text-text">{phase.challenge}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}