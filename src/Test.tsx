import cx from 'clsx'
import React, { FC } from 'react'

export const Test: FC = () => {
  return (
    <div
      className={cx('border my-0.5 mx-1 px-2 py-0.5 text-sm rounded', {
        'bg-sky-200 text-sky-900 border-sky-400': true,
        'bg-sky-50 text-neutral-900 border-sky-200': false,
      })}
    >
      test
    </div>
  )
}
