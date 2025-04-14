import type { Response } from '@/types'
import { instance } from './instance'

export function getCoreVersion() {
  return instance.get<Response<any>>('system/get_core_version')
}

export function getSystemResource() {
  return instance.get<Response<any>>('system/get_system_resources')
}

export function generateDebugFile() {
  return instance.get<Response<any>>('system/generate_debug_file_snapshot')
}