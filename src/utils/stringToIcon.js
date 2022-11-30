import {
    HeartIcon,
    CloudArrowDownIcon,
    DocumentTextIcon,
    ArrowRightIcon,
    UserIcon,
    HomeIcon,
    MagnifyingGlassIcon,
    PlusIcon,
    PlusCircleIcon,
    PencilIcon,
    TrashIcon,
    ChatBubbleLeftEllipsisIcon,
    ShareIcon,
    XMarkIcon,
  } from '@heroicons/react/24/outline'
  
  const stringToIconDB = {
    HeartIcon,
    CloudArrowDownIcon,
    DocumentTextIcon,
    ArrowRightIcon,
    UserIcon,
    HomeIcon,
    MagnifyingGlassIcon,
    PlusIcon,
    PlusCircleIcon,
    PencilIcon,
    TrashIcon,
    ChatBubbleLeftEllipsisIcon,
    ShareIcon,
    XMarkIcon,
  }
  
  export const stringToIcon = (iconAsString = '') => {
    if (iconAsString == '') return null
    if (!Object.keys(stringToIconDB).includes(iconAsString)) return null
    return stringToIconDB[iconAsString]
  }
  
  
