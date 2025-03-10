'use client'

import { useCallback, useState } from 'react'

import { uploadPdf } from '@/lib/pdf-service'
import { UploadDropzone } from './upload-dropzone'
import { useTransactions } from '@/hooks/store'

export function UploadForm() {
  const [isUploading, setIsUploading] = useState(false)

  const { setTransactions } = useTransactions()

  const handleDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (!file) return

    if (!file.type.includes('pdf')) {
      console.log({
        title: 'Invalid file type',
        description: 'Please upload a PDF file',
        variant: 'destructive',
      })
      return
    }

    setIsUploading(true)

    try {
      const data = await uploadPdf(file)
      // console.log('hit', data)
      setTransactions(data)
    } catch (error) {
      console.log('error while uploading parsing pdf', error)
    } finally {
      setIsUploading(false)
    }
  }, [])

  return (
    <div className="space-y-6  w-full rounded-lg ">
      <UploadDropzone loading={isUploading} onDrop={handleDrop} />
    </div>
  )
}
