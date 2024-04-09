import Image from 'next/image'

const BlogPost = ({ params: {blogPost} }) => {
  return (
    <div>
      <div className="px-[20px] py-[60px] w-full bg-[#fffad1] mb-[270px] md:flex md:flex-row md:items-center md:justify-between">
        <div className="max-w-[1200px] mx-[auto] my-[0] relative">
          <span className="block px-[15px] py-[5px] tracking-[1px] border-[2px] border-[solid] border-[#000] font-semibold rounded-[20px] w-[170px] mx-[auto] my-[0] text-center mb-[20px]">
            PROGRAMMING
          </span>
          <h1 className="font-semibold text-center mb-[30px]">
            A Programmers Guide to Battling Imposter Syndrome
          </h1>
          <p className="text-center font-light text-[18px] mb-[30px]"> 
            How to boost self-preception through communication, writing and kinship.
          </p>
          <Image
            className="w-[90%] absolute left-1/2 transform -translate-x-1/2 h-[300px] object-cover md:h-[400px]"
            src="https://picsum.photos/1200/1200"
            alt="imposter"
            width={1200}
            height={1200}
          />
        </div>
      </div>
      <div className="px-[20px] py-[0] max-w-[1000px] mx-[auto] my-[0] flex flex-col md:flex-row md:mt-[400px]">
        <div>
          <h2 className='text-[22px] mb-[15px] md:text-2xl md:mb-4'>Introduction</h2>
          <p className='mb-[25px] md:mb-6 md:text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quaerat omnis eius beatae nam iusto accusantium 
            consectetur suscipit voluptatum eligendi. Alias reiciendis 
            corrupti dolores! Cum fugiat nihil error praesentium, 
            laudantium inventore?
          </p>
          <h2 className='text-[22px] mb-[15px] md:text-2xl md:mb-4'>Software and Tools</h2>
          <p className='mb-[25px] md:mb-6 md:text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quaerat omnis eius beatae nam iusto accusantium 
            consectetur suscipit voluptatum eligendi. Alias reiciendis 
            corrupti dolores! Cum fugiat nihil error praesentium, 
            laudantium inventor
          </p>
          <h2 className='text-[22px] mb-[15px] md:text-2xl md:mb-4'>Other resources</h2>
          <p className='mb-[25px] md:mb-6 md:text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quaerat omnis eius beatae nam iusto accusantium 
            consectetur suscipit voluptatum eligendi. Alias reiciendis 
            corrupti dolores! Cum fugiat nihil error praesentium, 
            laudantium inventor
          </p>
        </div>
        <div className='order-[-1] text-center mb-[15px] md:order-1 md:w-full md:text-center md:mb-4'>
          <h3 className='mx-[0] my-[15px]'>Table of contents</h3>
          <span className='block cursor-pointer mb-[8px] hover:underline'>Introduction</span>
          <span className='block cursor-pointer mb-[8px] hover:underline'>Software And Tools</span>
          <span className='block cursor-pointer mb-[8px] hover:underline'>Other Resources</span>
          <h3 className='mx-[0] my-[15px]'>Author & Date</h3>
          <div className="blog-post-author">
            <div className='flex items-center justify-center text-left gap-[10px] font-medium'>
              <Image
                className='rounded-[100%] object-cover'
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
                alt="author-img"
                width={50}
                height={50}
              />
              <p className='text-[16px] m-0 inline-block'>Arley <br /> Brentley</p>
            </div>
            <div className='bg-[#eef6f0] w-[130px] px-[10px] py-[4px] rounded-[8px] font-semibold mx-[auto] my-[20px] [box-shadow:rgba(100,_100,_111,_0.2)_0px_7px_29px_0px]'>28 MAR 2024</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPost