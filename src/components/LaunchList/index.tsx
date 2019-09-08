import React, { FC } from 'react'
import { useLaunchListQuery } from '../../generated/graphql'
import LaunchList from './LaunchList'

interface Props {
  handleIdChange: (newId: number) => void
}

const LaunchListContainer: FC<Props> = ({ handleIdChange }) => {
  const { data, error, loading } = useLaunchListQuery()

  if (loading) {
    return <div>Loading...</div>
  }

  if (error || !data) {
    return <div>ERROR</div>
  }

  return <LaunchList data={data} handleIdChange={handleIdChange}/>
}

export default LaunchListContainer