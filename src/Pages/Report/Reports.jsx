import React from 'react'
import CostAnalysis from './CostAnalysis'
import CurrentStockLevels from './CurrentStockLevels'
import StockMovement from './StockMovement'
import ExpiryReports from './ExpiryReports'
import SupplierPerformance from './SupplierPerformance'
import SupplierTransactionHistory from './SupplierTransactionHistory'
import InspectionResults from './InspectionResults'
import NonComplianceIssues from './NonComplianceIssues'
import BudgetTracking from './BudgetTracking'
import StockTurnoverRate from './StockTurnoverRate'
import DemandForecasting from './DemandForecasting'
import RecallHistory from './RecallHistory'
import SafetyIncidents from './SafetyIncidents'
export default function Reports() {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row w-full '>
      <CurrentStockLevels/>
      <StockMovement/>
      </div>
      <div className='flex flex-row w-full'>
      <ExpiryReports/>
      <SupplierPerformance/>
      </div>
      <div className='flex flex-row'>
      <SupplierTransactionHistory/>
      <InspectionResults/>
      </div>
      <div className='flex flex-row'>
      <NonComplianceIssues/>
      <CostAnalysis/>
      </div>
      <div className='flex flex-row'>
      <BudgetTracking/>
      <StockTurnoverRate/>
      </div>
      <div className='flex flex-row'>
      <DemandForecasting/>
      <RecallHistory/>
      </div>      
      <div>
      <SafetyIncidents/>
      </div>

    </div>
  )
}
