import React from 'react'
import FormButton from '../../common/FormButton'
import { Translate } from 'react-localize-redux'
import BalanceBox from './BalanceBox'
import StakingFee from './StakingFee'

export default function Validator({ match, validators }) {
    const validator = validators.filter(validator => validator.name === match.params.validator)[0]
    return (
        <>
            <h1><Translate id='staking.validator.title' data={{ validator: match.params.validator }}/></h1>
            <FormButton linkTo={`/staking/${match.params.validator}/stake`}><Translate id='staking.validator.button' /></FormButton>
            {validator &&
                <>
                    <StakingFee fee={validator.fee.percentage}/>
                    <BalanceBox
                        title='staking.balanceBox.staked.title'
                        info='staking.balanceBox.staked.info'
                        amount={validator.stakedBalance}
                        version='no-border'
                    />
                    <BalanceBox
                        title='staking.balanceBox.unclaimed.title'
                        info='staking.balanceBox.unclaimed.info'
                        amount={validator.unclaimedRewards}
                        version='no-border'
                    />
                    <BalanceBox
                        title='staking.balanceBox.available.title'
                        info='staking.balanceBox.available.info'
                        amount='0'
                        version='no-border'
                    />
                    <BalanceBox
                        title='staking.balanceBox.pending.title'
                        info='staking.balanceBox.pending.info'
                        amount='0'
                        version='no-border'
                    />
                </>
            }
        </>
    )
}