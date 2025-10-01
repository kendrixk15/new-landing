'use client'

import { FC, memo, useEffect, useMemo, useRef, useState } from 'react'

export type PositionItem = {
  id: number
  name: string
}

export type PositionSelectorErrors = {
  position?: string
}

type PositionSelectorPropsType = {
  errors?: PositionSelectorErrors
  positionList: PositionItem[]
  value?: string
  onChange: (name: string, id?: number) => void
  className?: string
}

const PositionSelector: FC<PositionSelectorPropsType> = memo(({ errors, positionList, value, onChange, className }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [keyword, setKeyword] = useState(value || '')
  const menuRef = useRef<HTMLDivElement | null>(null)
  const [filter, setFilter] = useState('')
  const [hasInteracted, setHasInteracted] = useState(false)

  const filtered = useMemo(() => {
    const term = filter.trim().toLowerCase()
    if (!term) return positionList
    return positionList.filter((p) => p.name.toLowerCase().includes(term))
  }, [filter, positionList])

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!menuRef.current || !(event.target instanceof Node) || menuRef.current.contains(event.target)) return
      setIsOpen(false)
    }
    document.addEventListener('click', handleOutsideClick)
    return () => document.removeEventListener('click', handleOutsideClick)
  }, [])

  useEffect(() => {
    setKeyword(value || '')
  }, [value])

  return (
    <div className={`relative ${className || ''}`} ref={menuRef}>
      <div
        role="button"
        tabIndex={0}
        className={`flex items-center justify-between h-10 px-3 rounded-md bg-white border text-sm ${
          isOpen ? 'border-primary' : (errors?.position && hasInteracted) ? 'border-red-500' : 'border-input'
        }`}
        onClick={() => {
          setHasInteracted(true)
          setIsOpen((p) => !p)
        }}
      >
        <span className={`${keyword ? 'text-foreground' : 'text-muted-foreground'}`}>
          {keyword || 'Ex. CEO, Developer, etc.'}
        </span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/Vector.png" alt="toggle" className={`ml-2 h-2 w-[16px] transition ${isOpen ? 'rotate-180 opacity-100' : 'opacity-50'}`} />
      </div>
      {isOpen && (
        <div className="absolute left-0 mt-1 bg-white w-full rounded-md shadow border z-10">
          <div className="p-2">
            <input
              placeholder="Search positions"
              className="w-full bg-white border rounded px-2 py-1 text-sm focus:outline-none"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
          <div className="max-h-56 overflow-y-auto">
            {filtered.map((position) => (
              <button
                type="button"
                onClick={() => {
                  setHasInteracted(true)
                  setKeyword(position.name)
                  onChange(position.name, position.id)
                  setIsOpen(false)
                }}
                key={position.id}
                className={`w-full text-left py-2 px-3 hover:bg-muted ${
                  position.name === keyword ? 'text-muted-foreground cursor-default' : 'cursor-pointer'
                }`}
              >
                <span className="text-sm">{position.name}</span>
              </button>
            ))}
            {filtered.length === 0 && <p className="text-sm text-center py-3 text-muted-foreground">No positions found</p>}
          </div>
        </div>
      )}
    </div>
  )
})

PositionSelector.displayName = 'PositionSelector'

export default PositionSelector
