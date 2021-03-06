import React, { FC } from 'react'
import { LaunchListQuery } from '../../generated/graphql'
import './styles.scss'

interface Props {
  data: LaunchListQuery
  handleIdChange: (newId: number) => void
}

const className = 'LaunchList'

const LaunchList: FC<Props> = ({ data, handleIdChange }) => (
  <div className={className}>
    <h3>Launches</h3>
    <ol className={`${className}__list`}>
      {!!data.launches &&
        data.launches.map(
          (launch, i) =>
            !!launch && (
              <li
                key={i}
                className={`${className}__item`}
                onClick={() => handleIdChange(launch.flight_number!)}
              >
                {launch.mission_name} ({launch.launch_year})
              </li>
            ),
        )}
    </ol>
  </div>
);

export default LaunchList
