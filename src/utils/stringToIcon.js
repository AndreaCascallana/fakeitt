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
    ChevronDownIcon
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
    ChevronDownIcon
  }
  
  export const stringToIcon = (iconAsString = '') => {
    if (iconAsString == '') return null
    if (!Object.keys(stringToIconDB).includes(iconAsString)) return null
    return stringToIconDB[iconAsString]
  }
  
  
