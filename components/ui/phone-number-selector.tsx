'use client'

import { FC, memo, useEffect, useMemo, useRef, useState } from 'react'

export type PhoneCountryItem = {
  label: string
  phoneCode: string
  flag?: string
  value?: string
  countryPicture?: string
}

export type PhoneErrors = {
  phoneNumber?: string
}

type PhoneNumberSelectorPropsType = {
  errors?: PhoneErrors
  countryList: PhoneCountryItem[]
  value?: string
  onChange: (fullPhone: string) => void
  className?: string
}

const PhoneNumberSelector: FC<PhoneNumberSelectorPropsType> = memo(({ errors, countryList, value, onChange, className }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isFocus, setIsFocus] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [selectedCountry, setSelectedCountry] = useState<PhoneCountryItem | undefined>(undefined)
  const [filter, setFilter] = useState('')
  const [filteredCountries, setFilteredCountries] = useState<PhoneCountryItem[]>(countryList || [])
  const menuRef = useRef<HTMLDivElement | null>(null)
  const [hasInteracted, setHasInteracted] = useState(false)

  const unitedStates = useMemo(() => countryList.find((c) => c.label === 'United States'), [countryList])

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!menuRef.current || !(event.target instanceof Node) || menuRef.current.contains(event.target)) return
      setIsOpen(false)
      setIsFocus(false)
    }
    document.addEventListener('click', handleOutsideClick)
    return () => document.removeEventListener('click', handleOutsideClick)
  }, [])

  useEffect(() => {
    setFilteredCountries(countryList)
  }, [countryList])

  useEffect(() => {
    const term = filter.trim().toLowerCase()
    if (!term) {
      setFilteredCountries(countryList)
    } else {
      setFilteredCountries(countryList.filter((c) => c.label.toLowerCase().includes(term)))
    }
  }, [filter, countryList])

  useEffect(() => {
    if (value) {
      const match = value.match(/^(\+?\d+)(.*)$/)
      if (match) {
        setPhoneNumber(match[2].trim())
      }
    }
  }, [value])

  // Use a stable primitive for the code to avoid effect firing due to object identity changes
  const codeString = selectedCountry?.phoneCode || unitedStates?.phoneCode || ''

  useEffect(() => {
    if (phoneNumber.trim() !== '' && codeString) {
      onChange(`${codeString}${phoneNumber}`)
    } else {
      onChange('')
    }
    // Depend only on stable primitives to avoid infinite loops
  }, [phoneNumber, codeString])

  const currentFlag = selectedCountry?.flag || selectedCountry?.countryPicture || unitedStates?.flag || unitedStates?.countryPicture

  return (
    <div
      className={`grid grid-cols-6 xl:grid-cols-4 w-full h-10 bg-white border ${
        isOpen || isFocus ? 'border-primary' : (errors?.phoneNumber && hasInteracted) ? 'border-red-500' : 'border-input'
      } rounded-md relative ${className || ''}`}
      ref={menuRef}
    >
      <div className="col-span-1 relative items-center w-full h-full flex cursor-pointer px-2" onClick={() => {
        setHasInteracted(true)
        setIsOpen((p) => !p)
      }}>
        <div className="flex items-center gap-2">
          {currentFlag ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img alt="flag" src={currentFlag} className="w-[18px] h-[18px]" />
          ) : (
            <div className="w-[18px] h-[18px] bg-muted rounded" />
          )}
          <span className="text-xs text-muted-foreground truncate max-w-[60px]">
            {selectedCountry?.label || unitedStates?.label || 'Select'}
          </span>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="icon"
          src={'/icons/Vector.png'}
          className={`absolute top-4 right-2 h-2 w-[16px] transition ${isOpen ? 'rotate-180 opacity-100' : 'opacity-50'}`}
        />
      </div>
      <div className="col-span-5 xl:col-span-3 border-l border-input/50 w-full h-full">
        <div className="flex items-center h-full px-2">
          <span className="text-sm text-muted-foreground mr-1">{`(${selectedCountry?.phoneCode || unitedStates?.phoneCode || ''})`}</span>
          <input
            type="text"
            maxLength={15}
            className="bg-transparent border-none w-full p-0 focus:shadow-none focus:ring-0 outline-none text-sm"
            onFocus={() => {
              setHasInteracted(true)
              setIsFocus(true)
            }}
            onChange={(e) => setPhoneNumber(e.target.value.replace(/[^0-9]/g, ''))}
            value={phoneNumber}
            placeholder="Phone number"
          />
        </div>
      </div>
              {isOpen && (
          <div className="absolute left-0 top-full w-80 bg-white border rounded-md mt-1 z-10 shadow max-h-64">
            <div className="flex gap-2 items-center px-2 py-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="icon" src="/icons/searchIcon.svg" className="w-4 h-4" />
              <input
                placeholder="Search"
                className="w-full placeholder-muted-foreground bg-transparent h-full min-h-[36px] focus-visible:outline-none focus-shadow-none outline-none border-none text-sm"
                onChange={(e) => setFilter(e.target.value)}
                value={filter}
              />
            </div>
            <hr className="border-border" />
            {filteredCountries.length > 0 ? (
              <div className="max-h-48 overflow-y-auto">
                {filteredCountries.map((c) => (
                  <button
                    type="button"
                    key={c.value || c.label}
                    className="w-full px-3 grid grid-cols-6 py-2 hover:bg-muted cursor-pointer"
                    onClick={() => {
                      setHasInteracted(true)
                      setSelectedCountry(c)
                      setIsOpen(false)
                    }}
                  >
                    <div className="col-span-1">
                      {c.flag || c.countryPicture ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img alt="flag" src={c.flag || c.countryPicture} className="w-4 h-4" />
                      ) : (
                        <div className="w-4 h-4 bg-muted rounded" />
                      )}
                    </div>
                    <div className="col-span-4 pr-2">
                      <p className="text-sm truncate text-foreground">{c.label}</p>
                    </div>
                    <div className="col-span-1">
                      <p className="text-sm text-foreground">{c.phoneCode}</p>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <p className="p-3 text-sm text-center text-muted-foreground">Not found country</p>
            )}
          </div>
        )}
    </div>
  )
})

PhoneNumberSelector.displayName = 'PhoneNumberSelector'

export default PhoneNumberSelector
